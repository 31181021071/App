import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(content: any) {
    const templateParams = {
      from_name: "chirstmas-app",
      to_name: "tranhaiquan26@gmail.com",
      from_email: "tranhaiquan26@gmail.com",
      food: content.food,
      food_detail: content.foodDetail,
      hang_out: content.hangOut,
      hang_out_detail: content.hangOutDetail,
      other: content.other
    };

    console.log(templateParams);

    emailjs.send('service_6k0v2mn', 'template_1hsd8y4', templateParams, 'RQnXvavTFksshA4Hs')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
}
