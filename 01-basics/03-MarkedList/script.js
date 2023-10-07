import { createApp, defineComponent} from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const ListComponent = defineComponent({
  name: "ListComponent",

  data(){
    return{
      emails,
      search: null
    }
  },

  computed: {
    filteredEmails(){
      let arrObjects = {};

      for (let i = 0; i < emails.length; i++) {
        let flag_value = false;

        if(emails[i].includes(this.search)){
          flag_value =  true;

          if(this.search === ''){
            flag_value = false;
          }
        }
        arrObjects[i] = {
          email : emails[i],
          flag : flag_value
        }
      }

      return arrObjects;
    },
  }
});

const app = createApp(ListComponent);
const vm = app.mount('#app')

