function postService(url, type, data, loginUserReducer) {
  if (type === "post") {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": loginUserReducer?.data?.tokens?.accessToken,
        "X-DentalInsuranceVerification-User": loginUserReducer?.data?.user?.id
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });

  }
  else {
    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": loginUserReducer?.data?.tokens?.accessToken,
        "X-DentalInsuranceVerification-User": loginUserReducer?.data?.user?.id
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

}
export const ServiceCall = {
  postService
};