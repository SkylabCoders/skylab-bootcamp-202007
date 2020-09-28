import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Ranking.scss";
import poemStore from "../stores/poemStore";
import { loadPoems } from "../actions/poemActions";

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

export default function Ranking() {
  const classes = useStyles();
  const poemPoints = 3;
  const likePoints = 1;
  
  const [poems, setPoems] = useState(poemStore.getPoems());
  const [rank, setRank] = useState(poemStore.getRanking(poems, poemPoints, likePoints))

  useEffect(() => {
    poemStore.addChangeListener(onChange);
    if (poems.length === 0) loadPoems();
    else {
      onChange();
    }
    return () => poemStore.removeChangeListener(onChange);
  }, [poems.length], rank);

  function onChange() {
    setPoems(poemStore.getPoems());
    setRank(poemStore.getRanking(poems, poemPoints, likePoints));
  }

  return (
    <>
    
    <main className="ranking">
    <h3 className="ranking__title">Ranking de poetas</h3>
    <h5 className="ranking__subtitle">3 puntos por poema, 1 por like</h5>
    <TableContainer className="ranking__body" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Poetas</TableCell>
            <TableCell align="center">Puntos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.keys(rank).map((element, index) => (
            <TableRow key={index}>
              <TableCell className="ranking__picture-container" align="center" component="th" scope="row">
                {<div className="ranking__picture-wrap">
                  <img className="ranking__picture" src={rank[element].picture}/>
                  <p className="ranking__picture-description">{rank[element].author}</p>
                </div>}  
              </TableCell>
              <TableCell className="ranking__number" align="center">{rank[element].points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </main>
  </>
  );
}
