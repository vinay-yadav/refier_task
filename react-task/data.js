const code = "?code=AQT42t_dlyLxEkBZCIlMXyDOHNBOQ5vXQYwlWrmtPeKhlE_QmPqlAUvyMzXIEcOYGDQHNExDdl7ZQ4s_vHwCz_TDM3qesbh02M_Vp5Ene9icooBzzvk1tFzwyAPw2T93aLKp_lr3rG4b-k2NQIT2VEcccP-WivVT18U9E8uWHyMPw-70EXM60q2Fjm7koXUaFs0mZWaeX8urC6FwhGg&state=foobar"

console.log(code.split('=')[1].replace('&state', ''));
