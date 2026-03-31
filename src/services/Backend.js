// export const addItemToServer = async(task,date)=>{
//    const response = await fetch("http://localhost:3000/api/todo",{
//     method: "POST",
//     headers : {
//       "Content-Type" : "application/json",
//     },
//     body : JSON.stringify({task,date}),
//    });
//    const data = await response.json();
//     console.log("Data at Service : ",data)
//    return mapServerItemToLocalItem(data);
// }


// export let markItemCompleted = async(id)=>{
//   let response = await fetch(`http://localhost:3000/api/todo/${id}/completed`,{
//     method:"PUT",
//   });
//   const items = await response.json();
//   return mapServerItemToLocalItem(items)
// }

// export let deleteItemFromServer = async(id)=>{
//   let response = await fetch(`http://localhost:3000/api/todo/${id}`,{
//     method:"DELETE",
//   });
//   if(!response.ok) throw new Error("Delete Failed")
//     // const items = await response.json();
//   // return items._id
// }


export let logoutFromServer = async(onLogout,email)=>{
  let response = await fetch("http://localhost:3000/api/Quiz/logout",{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({email}),
  })
  const items = await response.json();
  console.log("After Logout Item is : ",items);
  onLogout(items);
  return items;
}

export const addQuoteToServer = async (quote,author,dataFromServer,setLoader)=>{
  console.log(quote,author)
   let response = await fetch("http://localhost:3000/api/addQuote",{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({quote,author}),
  })
  let data = await response.json();
  dataFromServer(data)
  setLoader(true);
}

export const getQuoteFromServer =async (getQuotes)=>{
  let response = await fetch("http://localhost:3000/api/getQuote",{
    method: "GET",
  })
  let data = await response.json();
  getQuotes(data);
  return data;
}
export const getMockListFromServer =async (examName,questionsLists)=>{
  let response = await fetch(`http://localhost:3000/api/getMockLists/${examName}`,{
    method: "GET",
  }) 
  let data = await response.json();
  console.log("MockLists : ",data);
  questionsLists(data);
  return data;
}
export const getPaidMockListFromServer =async (examName,questionsLists)=>{
  let response = await fetch(`http://localhost:3000/api/getPaidMockLists/${examName}`,{
    method: "GET",
  }) 
  let data = await response.json();
  console.log("MockLists : ",data);
  questionsLists(data);
  return data;
}


export const signUpToServer = async(firstName,lastName,email,password,confirmPassword,gender,onSuccessSigned,errorWhileSignedUp)=>{
   const response = await fetch("http://localhost:3000/api/Quiz/signUp",{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({firstName,lastName,email,password,confirmPassword,gender}),
   });
   const data = await response.json()
     console.log("Data at Service : ",data)
     console.log("Data at Service : ",data.message)
     if(!data.errors && data.message){
       onSuccessSigned(data.message)
     }
     if(data.errors && !data.message){
        errorWhileSignedUp(data.errors,data.oldInput)
     }
   return mapServerItemToLocalItem(data);
}

export const loginToServer = async (email,password,onSuccessLogin,errorWhileLogin)=>{
  console.log("Email Pass At LoginServer : ",email,password)
   const response = await fetch("http://localhost:3000/api/Quiz/login",{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({email,password}),
   });
   let data = await response.json();
   console.log("Data At Login : ",data)
    if(data.value.isLoggedIn){
       onSuccessLogin(data.value.isLoggedIn,data.email)
     }
     if(!data.value.isLoggedIn && data.value.message){
      console.log(data.errors)
        errorWhileLogin(data.errors,data.oldInput)
     }
   return data;
}

export const addMockToServer = async (name,noOfMock,MockAddSuccess)=>{
     const response = await fetch(`http://localhost:3000/api/addMock`,{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({name,noOfMock}),
   });
   let data = await response.json();
   MockAddSuccess(data);
   console.log("Data From Server While AddMock : ",data);
}
export const addPaidMockToServer = async (name,noOfMock,MockAddSuccess)=>{
     const response = await fetch(`http://localhost:3000/api/addPaidMock`,{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({name,noOfMock}),
   });
   let data = await response.json();
   MockAddSuccess(data);
   console.log("Data From Server While AddMock Paid : ",data);
}

export const addMockDetailToServer = async (exam,duration,questions,marks,setMockDetailAdded)=>{
     const response = await fetch(`http://localhost:3000/api/addMockDetails`,{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({exam,duration,questions,marks}),
   });
   let data = await response.json();
   setMockDetailAdded(data);
}
export const addPaidMockDetailToServer = async (exam,duration,questions,marks,setMockDetailAdded)=>{
     const response = await fetch(`http://localhost:3000/api/addPaidMockDetails`,{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({exam,duration,questions,marks}),
   });
   let data = await response.json();
   setMockDetailAdded(data);
}
export const addQuestionToServer = async ( examName,question,options,correctAnswer,setQuestionAdded,)=>{
     const response = await fetch(`http://localhost:3000/api/addQuestion`,{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({examName,question,options,correctAnswer}),
   });
   let data = await response.json();
   setQuestionAdded(data);
}
export const addPaidQuestionToServer = async ( examName,question,options,correctAnswer,setQuestionAdded,)=>{
     const response = await fetch(`http://localhost:3000/api/addPaidQuestion`,{
    method: "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({examName,question,options,correctAnswer}),
   });
   let data = await response.json();
   setQuestionAdded(data);
}
export const uploadVideoToServer = async (videoFile,examType,uploadBackendMessage)=>{
  const formData = new FormData();
  console.log("Exam Type : ",examType)
  formData.append("video",videoFile);
  console.log(`http://localhost:3000/api/uploadVideo/${examType}`)
     const response = await fetch(`http://localhost:3000/api/uploadVideo/${examType}`,{
    method: "POST",
    body :formData,
   });
   let data = await response.json();
   uploadBackendMessage(data);
   console.log("Backend Data after upload Video",data)
}

export const postRoadmapToServer = async (roadMapType,roadMapPdf,postedSuccess)=>{
  const formData = new FormData();
  formData.append("roadMapPdf",roadMapPdf);
  console.log(`http://localhost:3000/api/uploadVideo/${roadMapType} ${roadMapPdf}`)
     const response = await fetch(`http://localhost:3000/api/postRoadMap/${roadMapType}`,{
    method: "POST",
    body :formData,
   });
   let data = await response.json();
   postedSuccess(data);
}

export const getRoadMapFromServer = async(roadMapType)=>{
   const response = await fetch(`http://localhost:3000/api/getRoadMap/${roadMapType}`,{
    method: "GET"
   });
   let data = await response.json();
   return data;
}

export const getRoadMapWithoutCondition = async(methodData)=>{
   const response = await fetch(`http://localhost:3000/api/getRoadMap`,{
    method: "GET"
   });
   let data = await response.json();
   methodData(data);
}
export const getVideosFromServer=async(examName,videosMethod)=>{
   const response = await fetch(`http://localhost:3000/api/getVideos/${examName}`,{
    method: "GET"
   });
   let data = await response.json();
   videosMethod(data);
   console.log("Videos From Backend : ",data)
}
export const getNewsFromServer=async(getNews)=>{
   const response = await fetch(`http://localhost:3000/api/news/getNews`,{
    method: "GET"
   });
   let data = await response.json();
   getNews(data);
   console.log("News From Backend : ",data)
}


export const deleteMockFromServer = async (id)=>{
     const response = await fetch(`http://localhost:3000/api/deleteMock/${id}`,{
    method: "POST",
    body :  JSON.stringify({id}),
   });
   let data = await response.json(id);
   console.log("Data From Server While AddMock : ",data);
}
export const editMockAtServer = async (id,noOfMock)=>{
  console.log("AAYA BHAI")
     const response = await fetch(`http://localhost:3000/api/editMock/${id}`,{
    method: "PUT",
       headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({noOfMock}),
   });
   let data = await response.json();
   console.log("Data From Server While Edit : ",data);
}
export const editPaidMockAtServer = async (id,noOfMock)=>{
  console.log("AAYA BHAI")
     const response = await fetch(`http://localhost:3000/api/editPaidMock/${id}`,{
    method: "PUT",
       headers : {
      "Content-Type" : "application/json",
    },
    body :  JSON.stringify({noOfMock}),
   });
   let data = await response.json();
   console.log("Data From Server While Paid Edit : ",data);
}
export const getMockData = async (getMock)=>{
     const response = await fetch(`http://localhost:3000/api/getMock`,{
    method: "GET"
   });
   let data = await response.json();
   getMock(data);
   console.log("Data From Backend : ",data)
}
export const getPaidMockData = async (getMock)=>{
     const response = await fetch(`http://localhost:3000/api/getPaidMock`,{
    method: "GET"
   });
   let data = await response.json();
   getMock(data);
}

export const getMockDetailsFromServer = async (getMockDetail,mockName)=>{
  console.log("MockName : ",mockName);
     const response = await fetch(`http://localhost:3000/api/getMockDetails/${mockName}`,{
    method: "GET"
   });
   let data = await response.json();
   getMockDetail(data);
   console.log("Data From Backend : ",data)
}
export const getPaidMockDetailsFromServer = async (getMockDetail,mockName)=>{
  console.log("MockName : ",mockName);
     const response = await fetch(`http://localhost:3000/api/getPaidMockDetails/${mockName}`,{
    method: "GET"
   });
   let data = await response.json();
   getMockDetail(data);
   console.log("Data From Backend : ",data)
}

let mapServerItemToLocalItem = (serverItem)=>{
    return {
      id : serverItem._id,
      firstName : serverItem.firstName,
      lastName : serverItem.lastName,
      email : serverItem.email,
      password : serverItem.password,
      gender : serverItem.gender,
      createdAt : serverItem.createdAt,
      updateAt : serverItem.updateAt,
      isLoggedIn : serverItem.isLoggedIn,
    }
}