(() => {
  let colors = ['#a9f78c', '#7bf2ea', '#f4e216', '#f28293', '#f7f574', '#f7381b'];
  let fonts = ['Nanum Gothic', 'Signika Negative', 'Oswald', 'Dosis', 'Lobster', 'Quintessential'];

  const BoxRandom = () => (
    
    <div style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
                fontFamily: fonts[Math.floor(Math.random() * fonts.length)],
                height: '50vh',
                padding: '1em'}}>
      <p style={{fontSize: '16px',
                verticalAlign: 'middle'}}>Bienvenidos</p>
    </div>
  );
  
  ReactDOM.render(
    <BoxRandom />, document.getElementById('box-random')
  );
})();