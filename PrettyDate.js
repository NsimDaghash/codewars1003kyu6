/*
Pretty date

Write a helper function that accepts an argument (Ruby: a Time object / Others: number of seconds) and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

toPretty(0) => "just now"

toPretty(40000) => "11 hours ago"
Specifics
The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
Only times in the past will be given, with the range "just now" to "52 weeks ago"
*/

function toPretty(seconds) {
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  if (seconds === 0) {
    return "just now";
  }

  for (let interval in intervals) {
    const timeAgo = Math.floor(seconds / intervals[interval]);
    if (timeAgo >= 1) {
      return timeAgo === 1
        ? `${interval === "hour" ? "an " : "a "}${interval} ago`
        : `${timeAgo} ${interval}s ago`;
    }
  }
}
