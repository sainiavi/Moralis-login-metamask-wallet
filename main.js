console.log("hello ");




    const serverUrl = "https://isi3rkt8sdgx.usemoralis.com:2053/server";
      const appId = "PcYJXuL9hLhZ8xnykzVJAGTOg3Pt56gIfk1CZOXB";
      Moralis.start({ serverUrl, appId });


      login = async() => {

         await Moralis.Web3.authenticate().then(async function (user) {
            console.log("logged in");
            console.log(Moralis.User.current());
            user.set("name",document.getElementById('user-username').value);
            user.set("email",document.getElementById('user-email').value);
            await user.save();
            window.location.href ="dashboard.html";
        })

      }


      async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out");
      }
      
      get 

      

      document.querySelector('#btn-login').onclick = login;
      document.querySelector('#btn-logout').onclick = logOut;