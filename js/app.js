(() => {
  let colors = ['#66ffb2', '#d7c462', '#bbbcfd', '#6eff7a', '#ff664c', '#ff66b3'];
  let fonts = ['Nanum Gothic', 'Signika Negative', 'Oswald', 'Dosis', 'Lobster', 'Quintessential'];
  let sizes = ['18px', '16px', '20px', '24px', '22px', '26px'];

  const BoxRandom = () => (
    <div style={{backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
                fontFamily: fonts[Math.floor(Math.random() * fonts.length)],
                height: 'auto',
                border: '2px solid #000',
                borderRadius: '5px'
                }}>
      <p style={{fontSize: sizes[Math.floor(Math.random() * sizes.length)],
                padding: '4em',
                letterSpacing: '.1em'}}>Bienvenidos</p>
    </div>
  );
  
  ReactDOM.render(
    <BoxRandom />, document.getElementById('box-random')
  );
})();