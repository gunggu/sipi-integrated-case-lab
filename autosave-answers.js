(function(){
  let saveTimer=null;
  document.addEventListener('input',function(e){
    if(e.target?.id!=='notes'&&e.target?.id!=='why') return;
    const key=e.target.id==='notes'?`notes-${current}`:`why-${current}`;
    state[key]=e.target.value;
    clearTimeout(saveTimer);
    saveTimer=setTimeout(()=>save(),180);
  });
  document.addEventListener('change',function(e){
    if(e.target?.id==='notes'||e.target?.id==='why'){
      const key=e.target.id==='notes'?`notes-${current}`:`why-${current}`;
      state[key]=e.target.value;
      save();
    }
  });
})();
