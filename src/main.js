import $ from 'jquery';
import { DoctorSearch } from './doctorsearch.js'; 
$(document).ready(function() {
  $('#doctorQuerySearch').click(function() {
    const query = $('#query').val();

    let doctorSearch = new DoctorSearch(); 
    let promise = doctorSearch.getDoctorsByQuery(query); 

    promise.then(function(response) {
      let body = JSON.parse(response);
      $( ".showCount" ).empty();
      $( ".showNames" ).empty();
      if (body.meta.count <= 0) {
        $('.showNames').text(`No Doctors Available`);
      } else {
        for (let i = 0; i < body.meta.count; i++) {
          $('.showCount').text(`Doctors Available: ${body.meta.count}`);
          $('.showNames').append(`
          <p><br>Practice Name: ${body.data[i].practices[0].name}
          <br>Practitioner: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} ${body.data[i].profile.title} 
          <br>Street Address: ${body.data[i].practices[0].visit_address.city} ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.zip} & 
          <br>Phone number: ${body.data[i].practices[0].phones.number} & 
          <br>Website: ${body.data[i].practices[0].website} & 
          <br>Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}</p>
          `); 
        }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processsing your request: ${error.message}`);
    });
  });
  $('#doctorNameSearch').click(function() {
    const name = $('#name').val();

    let doctorSearch = new DoctorSearch(); 
    let promise = doctorSearch.getDoctorsByName(name); 

    promise.then(function(response) {
      let body = JSON.parse(response);
      $( ".showCount" ).empty();
      $( ".showNames" ).empty();
      if (body.meta.count <= 0) {
        $('.showNames').text(`No Doctors Available`);
      } else {
        for (let i = 0; i < body.meta.count; i++) {
          $('.showCount').text(`Doctors Available: ${body.meta.count}`);
          $('.showNames').append(`
          <p><br>Practice Name: ${body.data[i].practices[0].name}
          <br>Practitioner: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} ${body.data[i].profile.title} 
          <br>Street Address: ${body.data[i].practices[0].visit_address.city} ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.street} ${body.data[i].practices[0].visit_address.zip} & 
          <br>Phone number: ${body.data[i].practices[0].phones.number} & 
          <br>Website: ${body.data[i].practices[0].website} & 
          <br>Accepting New Patients: ${body.data[i].practices[0].accepts_new_patients}</p>
          `); 
        }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processsing your request: ${error.message}`);
    });
  });
});