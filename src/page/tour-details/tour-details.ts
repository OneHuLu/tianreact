import { Fetch } from "@utils/Fetch";
import { message as Message } from "antd";
import {
  setTourDetailList,
  setTourDetailsLoading,
} from "./reducers/index-reducer";
/**
 * 旅游详情页数据获取
 * @param id
 * @param dispatch
 */
const getTourDetails = async (tourId: string, dispatch: any) => {
  dispatch(setTourDetailsLoading(true));
  const { status, data, message } = await Fetch(`/tours/tour-detail/${tourId}`);
  if (status === "success") {
    dispatch(setTourDetailList(data));
  } else {
    Message.error(`${message}`);
  }
  dispatch(setTourDetailsLoading(false));
};

export { getTourDetails };
