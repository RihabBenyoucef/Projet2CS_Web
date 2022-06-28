let operateurs = require('./RecupererOperateurs')
let facturesOP = require('./findAllFacturesOP')
let trajets = require('./findAlltradjet')
let factures = require('./findAllFactures')

module.exports = (app) => {
app.get('/api/factures/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let km = factures.find(km => km.id === id).kmCNAS
    let type = operateurs.find(type => type.id === id).vehicule
    let attente = trajets.find(attente => attente.id === id).dureeAttente
    let medecin = operateurs.find(medecin => medecin.id === id).boolMedecin
    let at = trajets.find(at => at.id === id).boolAttente
    let mntOP = facturesOP.find(mntOP => mntOP.id === id).montantOP
   
    const message = 'Une facture a bien été trouvée.'
    const message2 = 'aucun écart constaté.'
    const message3 = 'Il existe un écart.'
    //res.json(success(message, facture))
    let resultkm;
    let montant;
    if (type ="Embulance sanitaire" ) {
      if (km <= 100)
       { if (at ==1)
          {
            resultkm = km*18 + 25*(attente/0.25);
          }
          else {
            resultkm = km*18;
          }
        
       }
     if (km > 100)
       {
        if (at ==1)
          {
            resultkm = km*13.5 + 25*(attente/0.25);
          }
          else {
            resultkm = km*13.5;
          }
       }
  
    } 
  
  if (type ="Véhicule sanitaire léger") {
      if (km <= 100)
       {
        if (at ==1)
        {
          resultkm = km*12 + 25*(attente/0.25);
        }
        else {
          resultkm = km*12;
        }
       }
      if (km > 100)
      {
        if (at ==1)
          {
            resultkm = km*9 + 25*(attente/0.25);
          }
          else {
            resultkm = km*9;
          }
      }
    
    } 
  
  if (type ="Embulance sanitaire" && medecin ==1 ) {
        if (km <= 100)
         {
          if (at ==1)
          {
            resultkm = km*27 + 25*(attente/0.25);
          }
          else {
            resultkm = km*27;
          }
         }
        if (km > 100)
        {
          if (at ==1)
          {
            resultkm = km*19 + 25*(attente/0.25);
          }
          else {
            resultkm = km*19;
          }
        }
      //resultkm = `Le montant est ${km*2} .`;
    } 
    
    montant = `Le montant est ${resultkm} .`;
    res.json(success(message, montant))
    let ecart = resultkm - mntOP;
    let r = `L'écart est ${ecart} .`;
    if (ecart == 0)
          {
            res.json(success(message2))
          }
          else {
            res.json(success(message3, r))
          }
  
  }
  
  
  ) }