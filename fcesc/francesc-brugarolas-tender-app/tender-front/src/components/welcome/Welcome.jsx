import React from 'react';
import Signin from './Signin';
import './welcome.sass';
import { useAuth0 } from "@auth0/auth0-react";

function Welcome() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading... please, wait</p>;
  }
  
  return (
    <div className='welcome'>
      <h2>Welcome to tender</h2>
      <div className="welcome__container">
        <div className="welcome__main">
          <h4>Helping easier tender organizers and providers</h4>
          <p>
            Ita fac, mi Lucili: vindica te tibi, et tempus quod adhuc aut auferebatur aut subripiebatur aut excidebat collige et serva. 
            Persuade tibi hoc sic esse ut scribo: quaedam tempora eripiuntur nobis, quaedam subducuntur, quaedam effluunt. Turpissima 
            tamen est iactura quae per neglegentiam fit. Et si volueris attendere, magna pars vitae elabitur male agentibus, maxima nihil 
            agentibus, tota vita aliud agentibus. Quem mihi dabis qui aliquod pretium tempori ponat, qui diem aestimet, qui intellegat se 
            cotidie mori? In hoc enim fallimur, quod mortem prospicimus: magna pars eius iam praeterit; quidquid aetatis retro est mors 
            tenet. Fac ergo, mi Lucili, quod facere te scribis, omnes horas complectere; sic fiet ut minus ex crastino pendeas, si 
            hodierno manum inieceris. Dum differtur vita transcurrit. Omnia, Lucili, aliena sunt, tempus tantum nostrum est; in huius 
            rei unius fugacis ac lubricae possessionem natura nos misit, ex qua expellit quicumque vult. Et tanta stultitia mortalium est 
            ut quae minima et vilissima sunt, certe reparabilia, imputari sibi cum impetravere patiantur, nemo se iudicet quicquam debere 
            qui tempus accepit, cum interim hoc unum est quod ne gratus quidem potest reddere.
          </p>
          <p>
            Interrogabis fortasse quid ego faciam qui tibi ista praecipio. Fatebor ingenue: quod apud luxuriosum sed diligentem evenit, 
            ratio mihi constat impensae. Non possum dicere nihil perdere, sed quid perdam et quare et quemadmodum dicam; causas 
            paupertatis meae reddam. Sed evenit mihi quod plerisque non suo vitio ad inopiam redactis: omnes ignoscunt, nemo succurrit. 
            Quid ergo est? non puto pauperem cui quantulumcumque superest sat est; tu tamen malo serves tua, et bono tempore incipies. 
            Nam ut visum est maioribus nostris, 'sera parsimonia in fundo est'; non enim tantum minimum in imo sed pessimum remanet. 
            Vale. 
          </p>
        </div>
        <div className="welcome__side">
          <Signin />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
