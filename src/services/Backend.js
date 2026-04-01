const BASE_URL = "https://vidyasetu-backend-6bkr.onrender.com";

export let logoutFromServer = async (onLogout, email) => {
  let response = await fetch(`${BASE_URL}/api/Quiz/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const items = await response.json();
  console.log("After Logout Item is : ", items);
  onLogout(items);
  return items;
};

export const addQuoteToServer = async (
  quote,
  author,
  dataFromServer,
  setLoader,
) => {
  console.log(quote, author);
  let response = await fetch(`${BASE_URL}/api/addQuote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quote, author }),
  });
  let data = await response.json();
  dataFromServer(data);
  setLoader(true);
};

export const getQuoteFromServer = async (getQuotes) => {
  let response = await fetch(`${BASE_URL}/api/getQuote`, {
    method: "GET",
  });
  let data = await response.json();
  getQuotes(data);
  return data;
};
export const getMockListFromServer = async (examName, questionsLists) => {
  let response = await fetch(
    `${BASE_URL}/api/getMockLists/${examName}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  console.log("MockLists : ", data);
  questionsLists(data);
  return data;
};
export const getPaidMockListFromServer = async (examName, questionsLists) => {
  let response = await fetch(
    `${BASE_URL}/api/getPaidMockLists/${examName}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  console.log("MockLists : ", data);
  questionsLists(data);
  return data;
};

export const signUpToServer = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  gender,
  role,
  onSuccessSigned,
  errorWhileSignedUp,
) => {
  const response = await fetch(`${BASE_URL}/api/Quiz/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      gender,
      role,
    }),
  });
  const data = await response.json();
  console.log("Data at Service : ", data);
  console.log("Data at Service : ", data.message);
  if (!data.errors && data.message) {
    onSuccessSigned(data.message);
  }
  if (data.errors && !data.message) {
    errorWhileSignedUp(data.errors, data.oldInput);
  }
  return mapServerItemToLocalItem(data);
};

export const loginToServer = async (
  email,
  password,
  onSuccessLogin,
  errorWhileLogin,
) => {
  console.log("Email Pass At LoginServer : ", email, password);
  const response = await fetch(`${BASE_URL}/api/Quiz/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  let data = await response.json();
  console.log("Data At Login : ", data);
  if (data.value.isLoggedIn) {
    onSuccessLogin(data.value.isLoggedIn, data.email,data.role);
  }
  if (!data.value.isLoggedIn && data.value.message) {
    console.log(data.errors);
    errorWhileLogin(data.errors, data.oldInput);
  }
  return data;
};

export const addMockToServer = async (name, noOfMock, MockAddSuccess) => {
  const response = await fetch(`${BASE_URL}/api/addMock`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, noOfMock }),
  });
  let data = await response.json();
  MockAddSuccess(data);
  console.log("Data From Server While AddMock : ", data);
};
export const addPaidMockToServer = async (name, noOfMock, MockAddSuccess) => {
  const response = await fetch(`${BASE_URL}/api/addPaidMock`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, noOfMock }),
  });
  let data = await response.json();
  MockAddSuccess(data);
  console.log("Data From Server While AddMock Paid : ", data);
};

export const addMockDetailToServer = async (
  exam,
  duration,
  questions,
  marks,
  setMockDetailAdded,
) => {
  const response = await fetch(`${BASE_URL}/api/addMockDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ exam, duration, questions, marks }),
  });
  let data = await response.json();
  setMockDetailAdded(data);
};
export const addPaidMockDetailToServer = async (
  exam,
  duration,
  questions,
  marks,
  setMockDetailAdded,
) => {
  const response = await fetch(`${BASE_URL}/api/addPaidMockDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ exam, duration, questions, marks }),
  });
  let data = await response.json();
  setMockDetailAdded(data);
};
export const addQuestionToServer = async (
  examName,
  question,
  options,
  correctAnswer,
  setQuestionAdded,
) => {
  const response = await fetch(`${BASE_URL}/api/addQuestion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ examName, question, options, correctAnswer }),
  });
  let data = await response.json();
  setQuestionAdded(data);
};
export const addPaidQuestionToServer = async (
  examName,
  question,
  options,
  correctAnswer,
  setQuestionAdded,
) => {
  const response = await fetch(`${BASE_URL}/api/addPaidQuestion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ examName, question, options, correctAnswer }),
  });
  let data = await response.json();
  setQuestionAdded(data);
};
export const uploadVideoToServer = async (
  videoFile,
  examType,
  lectureType,
  uploadBackendMessage,
) => {
  console.log("Frontend Me Bhai :", examType);
  const formData = new FormData();
  formData.append("video", videoFile); // file
  formData.append("examType", examType); // text field
  formData.append("lectureType", lectureType);
  console.log(`${BASE_URL}/api/uploadVideo/${examType}`);
  const response = await fetch(
    `${BASE_URL}/api/uploadVideo/${examType}`,
    {
      method: "POST",
      body: formData,
    },
  );
  let data = await response.json();
  uploadBackendMessage(data);
  console.log("Backend Data after upload Video", data);
};

export const postRoadmapToServer = async (
  roadMapType,
  roadMapPdf,
  postedSuccess,
) => {
  const formData = new FormData();
  formData.append("roadMapPdf", roadMapPdf);
  const response = await fetch(
    `${BASE_URL}/api/postRoadMap/${roadMapType}`,
    {
      method: "POST",
      body: formData,
    },
  );
  let data = await response.json();
  postedSuccess(data);
};
export const addLectureDetailsToServer = async (
  examName,
  lectureType,
  addedSuccess,
) => {
  console.log("Exam Bhaiya : ", examName, lectureType);
  const response = await fetch(`${BASE_URL}/api/addLectureDetails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // important!
    },
    body: JSON.stringify({ examName, lectureType }),
  });
  let data = await response.json();
  addedSuccess(data);
};

export const getLectureDetailsFromServer = async (examName, getDetails) => {
  const response = await fetch(
    `${BASE_URL}/api/getLectureDetails/${examName}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  getDetails(data);
};
export const getRoadMapFromServer = async (roadMapType) => {
  const response = await fetch(
    `${BASE_URL}/api/getRoadMap/${roadMapType}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  return data;
};

export const getRoadMapWithoutCondition = async (methodData) => {
  const response = await fetch(`${BASE_URL}/api/getRoadMap`, {
    method: "GET",
  });
  let data = await response.json();
  methodData(data);
};
export const getVideosFromServer = async (examName,lectureType, videosMethod) => {
  const response = await fetch(
    `${BASE_URL}/api/getVideos/${examName}?lectureType=${lectureType}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  videosMethod(data);
  console.log("Videos From Backend : ", data);
};
export const getNewsFromServer = async (getNews) => {
  const response = await fetch(`${BASE_URL}/api/news/getNews`, {
    method: "GET",
  });
  let data = await response.json();
  getNews(data);
  console.log("News From Backend : ", data);
};

export const deleteMockFromServer = async (id, setDeleteMockMessage) => {
  const response = await fetch(`${BASE_URL}/api/deleteMock/${id}`, {
    method: "POST",
    body: JSON.stringify({ id }),
  });
  let data = await response.json(id);
  setDeleteMockMessage(data);
  console.log("Data From Server While AddMock : ", data);
};
export const editMockAtServer = async (id, noOfMock) => {
  console.log("AAYA BHAI");
  const response = await fetch(`${BASE_URL}/api/editMock/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ noOfMock }),
  });
  let data = await response.json();
  console.log("Data From Server While Edit : ", data);
};
export const editPaidMockAtServer = async (id, noOfMock) => {
  console.log("AAYA BHAI");
  const response = await fetch(`${BASE_URL}/api/editPaidMock/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ noOfMock }),
  });
  let data = await response.json();
  console.log("Data From Server While Paid Edit : ", data);
};
export const getMockData = async (getMock) => {
  const response = await fetch(`${BASE_URL}/api/getMock`, {
    method: "GET",
  });
  let data = await response.json();
  getMock(data);
  console.log("Data From Backend : ", data);
};
export const getPaidMockData = async (getMock) => {
  const response = await fetch(`${BASE_URL}/api/getPaidMock`, {
    method: "GET",
  });
  let data = await response.json();
  getMock(data);
};

export const getMockDetailsFromServer = async (getMockDetail, mockName) => {
  console.log("MockName : ", mockName);
  const response = await fetch(
    `${BASE_URL}/api/getMockDetails/${mockName}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  getMockDetail(data);
  console.log("Data From Backend : ", data);
};
export const getPaidMockDetailsFromServer = async (getMockDetail, mockName) => {
  console.log("MockName : ", mockName);
  const response = await fetch(
    `${BASE_URL}/api/getPaidMockDetails/${mockName}`,
    {
      method: "GET",
    },
  );
  let data = await response.json();
  getMockDetail(data);
  console.log("Data From Backend : ", data);
};

let mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    firstName: serverItem.firstName,
    lastName: serverItem.lastName,
    email: serverItem.email,
    password: serverItem.password,
    gender: serverItem.gender,
    createdAt: serverItem.createdAt,
    updateAt: serverItem.updateAt,
    isLoggedIn: serverItem.isLoggedIn,
  };
};
