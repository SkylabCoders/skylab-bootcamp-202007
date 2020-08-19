function sortResults(data){
    console.log(data);
    data.sort(function compare(a, b) {
       const pointsA = a.points;
       const pointsB = b.points;
        if (pointsA > pointsB) return -1;
        if (pointsB > pointsA) return 1;
        return 0;
      })
}

export default sortResults;