import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`👮‍♂️ Qorovul ishladi! Ketayotgan so'rov: ${req.url}`);
  const token = localStorage.getItem('tizim_holati');

  if(token){
    const ruxsatnomaBilanSorov=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    return next(ruxsatnomaBilanSorov)
  }
  return next(req);
};
