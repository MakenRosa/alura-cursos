export const calculateNewbalance = (values, balance) => {
  if (values.transaction === "Deposit") {
    return balance - parseInt(values.value);
  } else {
    return balance + parseInt(values.value);
  }
};
