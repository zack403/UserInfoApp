      
      const displayBirthdate = ({dob: {age}}) => {
        return document.querySelector('.details').textContent =`${age} years old`;
      }
      
      const displayPhone = ({phone, cell}) => {
                return document.querySelector('.details').textContent = `${phone} / ${cell}`;

      }
      
      const displayAddress = ({location: {street,city,state}}) => {
         return document.querySelector('.details').textContent = `${street}, ${city}, ${state}`;
      }
      
      const displayExtraUserInfo = param => {
        document.getElementById('btn-birthdate').addEventListener('click', () => {
       			displayBirthdate(param);                                                           
       })
        document.getElementById('btn-phone').addEventListener('click', () => {
       			displayPhone(param);                                                           
       })
        document.getElementById('btn-address').addEventListener('click', () => {
       			displayAddress(param);                                                           
       })
      }
      
      const notify = (msg) => {
        const toastr = document.querySelector('.messages');
        if(!toastr) return;
        
        toastr.textContent = msg;
        if(!toastr.classList.contains('on')) {
          toastr.classList.add('on');
        }
      };
      
      const clearNotice = () => {
        const toastr = document.querySelector('.messages');
        if(!toastr) return;
        
        toastr.textContent = '';
        toastr.classList.remove('on');
      };
      
      const displayUserPhotoAndName = (data) => {
        if(!data) return;
        
        // add your code here
        const {results} = data;
        const [profile] = results;
        const {name: {title, first, last}, picture: {large}} = profile;
		const heading2Element = document.querySelector('#title');
        heading2Element.textContent = `${title} ${last} ${first}`;
        document.getElementById('img').src = large; 

        clearNotice();
        displayExtraUserInfo(profile);

       
      };
            
      const getAUserProfile = () => {
        const api = 'https://randomuser.me/api/';
        
        // make API call here
         fetch(api).then(response => {
         return response.json();
        }).then(data => {
            console.log(data);
            displayUserPhotoAndName(data);    
        }).catch(err => {
            document.querySelector('#title').textContent = "Unable to fetch user";
        })
        
        notify(`requesting profile data ...`);
      };
      
      const startApp = () => {
        // invoke the getAUserProfile here
        getAUserProfile();
      };

