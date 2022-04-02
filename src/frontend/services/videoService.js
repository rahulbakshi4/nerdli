import axios from "axios";
export const videoListService = async () => axios.get('api/videos')
