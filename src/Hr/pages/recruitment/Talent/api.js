import axios from 'axios';

export const saveTalent = async (formData) => {
    try{
        await axios.post(
            "http://13.126.190.50:8089/talents/create/talents",
            formData
          );
    } catch(error) {
        console.error("saveTalent",error)
    }
}

export const deleteTalent = async (id) => {
    try{
        await axios.delete(`http://13.126.190.50:8089/talents/delete/${id}`)
    } catch(error) {
        console.error("Error deleting Talent",error)
    }
};

export const loadTalent = async () => {
    try {
       const result =  await axios.get(
            "http://13.126.190.50:8089/talents/get/talents",
            {
              validateStatus: () => {
                return true;
              },
            }
        
          );
          return result.data
    } catch (error) {
        console.error("Error load Talent", error)
    }
}