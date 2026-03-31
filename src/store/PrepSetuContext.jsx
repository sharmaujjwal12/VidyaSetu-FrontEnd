import { createContext } from "react";
import { useState } from "react";
import {
  addMockDetailToServer,
  addMockToServer,
  addPaidMockDetailToServer,
  addPaidMockToServer,
  addPaidQuestionToServer,
  addQuestionToServer,
  addQuoteToServer,
  deleteMockFromServer,
  editMockAtServer,
  editPaidMockAtServer,
} from "../services/Backend";

export const PrepSetuContext = createContext({
  studyMaterial: [],
  addQuotes: () => {},
  getQuotes: () => {},
  addPaidQuestion: () => {},
  addMockClicked: () => {},
  deleteMock: () => {},
  editMock: () => {},
  editPaidMock: () => {},
  addQuestion: () => {},
  mockDetails: () => {},
  addPaidMockClicked : () => {},
  paidMockDetails : () => {},
  mockAdded:"",
  quoteAdded:"",
  mockDetailAdded:"",
  questionAdded:"",
});

let PrepSetuContextProvider = (props) => {
  let [mockAdded,setMockAdded] = useState('')
  let [quoteAdded,setquoteAdded] = useState('')
  let [questionAdded,setQuestionAdded] = useState('')
  let [mockDetailAdded,setMockDetailAdded] = useState('')
  const studyMaterials = [
    { title: "CGL", description: "Live Classes For Complete Preperation" },
    { title: "UP POLICE", description: "Live Classes For Complete Preperation" },
  ];
  const dataFromServer = (data) =>{
      setquoteAdded(data)
  }
  const addQuotes = (quote, author,setLoader) => {
    addQuoteToServer(quote, author,dataFromServer,setLoader);
  };
  const MockAddSuccess=(data)=>{
    setMockAdded(data)
  }
  const addMockClicked = (name, noOfMock) => {
    addMockToServer(name, noOfMock,MockAddSuccess);
  };
  const addPaidMockClicked = (name, noOfMock) => {
    addPaidMockToServer(name, noOfMock,MockAddSuccess);
  };
  const deleteMock = (id) => {
    deleteMockFromServer(id);
  };
  const editMock = (id, noOfMock) => {
    editMockAtServer(id, noOfMock);
  };
  const editPaidMock = (id, noOfMock) => {
    editPaidMockAtServer(id, noOfMock);
  };
  const addQuestion = (
    examName,
    question,
    options,
    correctAnswer
  ) => {
    addQuestionToServer(
      examName,
      question,
      options,
      correctAnswer,
      setQuestionAdded,
    );
  };
  const addPaidQuestion = (
    examName,
    question,
    options,
    correctAnswer
  ) => {
    addPaidQuestionToServer(
      examName,
      question,
      options,
      correctAnswer,
      setQuestionAdded,
    );
  };
  const mockDetails = (name,duration,questions,marks)=>{
    addMockDetailToServer(name,duration,questions,marks,setMockDetailAdded)
  }
  const paidMockDetails = (name,duration,questions,marks)=>{
    addPaidMockDetailToServer(name,duration,questions,marks,setMockDetailAdded)
  }
  const [studyMaterial, setStudyMaterial] = useState(studyMaterials);
  let [homePage, setHomePage] = useState(true);
  return (
    <PrepSetuContext.Provider
      value={{
        studyMaterial,
        mockAdded,
        quoteAdded,
        mockDetailAdded,
        questionAdded,
        addQuotes,
        addMockClicked,
        deleteMock,
        editMock,
        addQuestion,
        mockDetails,
        addPaidMockClicked ,
        editPaidMock,
        paidMockDetails ,
        addPaidQuestion,
      }}
    >
      {props.children}
    </PrepSetuContext.Provider>
  );
};

export default PrepSetuContextProvider;
