conts login = (email,passwd, callback)=>{
  var err='';
  var bd_data=''; //simula info proveniente de bd.
  if (email == 'joe@doe.com' && passwd = '1234') {
    //consultar en BD info faltante
    bd_data={
      'email':email,
      'depto': 'ventas',
      'phone': '5543235689'
    }
  } else {
    err={
      'mensaje': 'credenciales incorrectas'
    }
  }
  callback(err,bd_data);
} //const login =  function(){}


exports.login ) login;
