import {useState} from 'react'

const StateInterview = () => {
    const [email, setEmail] = useState("");
    const [candidateEmailError, setCandidateEmailError] = useState("");
    const [schedulerEmailError, setSchedulerEmailError] = useState("");
    const [interviewerEmailError, setInterviewerEmailError] = useState("");
    const [formVisible, setFormVisible] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [interview, setInterview] = useState([]);
    const [open, setOpen] = useState("");
    const [recDelete, setRecDelete] = useState("");
    const [formData, setFormData] = useState({
      candidateEmailId: " ",
      schedulerEmailId: " ",
      interviewerEmailId: " ",
      talentId: " ",
      interviewStatus: " ",
      meetingLink: " ",
      dateTime: " ",
    });
    return {
        email, setEmail,candidateEmailError, setCandidateEmailError,schedulerEmailError, setSchedulerEmailError,interviewerEmailError, setInterviewerEmailError,formVisible, setFormVisible,toggle, setToggle,interview, setInterview,formData, setFormData,recDelete, setRecDelete, open, setOpen
    }
}

export default StateInterview;