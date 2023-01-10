import { ScaleFromCenterAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function formatDate(unixTimestamp: string) {
  const unixTimestampNum = Number(unixTimestamp);
  const milliseconds = unixTimestampNum * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject.toLocaleString();
}

export function getConversationId(userIds: string[]) {
  const _userIds = [...userIds];
  _userIds.sort();
  return _userIds.join("");
}
