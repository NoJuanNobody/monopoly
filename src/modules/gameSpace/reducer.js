import ROLLDICE from './actionTypes'
import axios from 'axios';
import { API_URL } from '../../constants/paths';
const initial = {
  card:null
}

async function rollDice(state=initial, notif) {
  const { type } = notif;
  
  switch (type) {
    case ROLLDICE:
      const card = await new Promise(async (resolve, reject) => {
          try {
            return axios.get(API_URL).then((res) => {
              const { space } = res;
              resolve(space);
            })
          } catch (error) {
              reject(error)
          }
      }
      )
      return {card};
    default:
      return {card}
  }
}
//selectors??

export default rollDice;
