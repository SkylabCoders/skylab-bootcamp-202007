function formatFlow(e){
  const realDate = e.time === '' ? '' : new Date(e.time);
  const estDate = e.est_time === '' ? '' : new Date(e.est_time);

  function getCustomDateString(date){
    const year = date.getFullYear();
    const tempMonth = date.getMonth() + 1;
    const month = tempMonth < 10 ? `0${String(tempMonth)}` : tempMonth;
    const tempDay = date.getDate();
    const day = tempDay < 10 ? `0${String(tempDay)}` : tempDay;
    return `${String(year).slice(-2)}.${month}.${day}`;
  }

  const newE = { ...e };
  newE.time = realDate === '' ? '' : getCustomDateString(realDate);
  newE.est_time = estDate === '' ? '' : getCustomDateString(estDate);

  return newE;
}

export default formatFlow;