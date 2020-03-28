import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        form: {
            fullName: 'Sakhri Houssem Eddine',
            job: 'Full Stack Dev',
            phone: '+213 777850224',
            email: 's.houssem.e@gmail.com',
            links: ["sakhrihoussem.me", "github.com/sakhrihoussem"],
            socialNetworks: [],
            resume: 'test',
            experiences: [],
            projects: [],
            educations: [],
            skills: [],
            languages: [],
            interests: [],
        },
        socialNetworksList: [
            { value: null, text: 'Please select an social media' },
            { value: 'linkedin-in', text: 'LinkedIn', url: 'https://www.linkedin.com/in/'},
            { value: 'facebook', text: 'Facebook', url: 'https://www.facebook.com/'},
            { value: 'instagram', text: 'Instagram', url: 'https://www.instagram.com/'},
            //todo: add more social networks
        ],
        levels: [
            { value: null, text: 'Please select the Level' },
            { value: '50', text: 'Beginner' },
            { value: '75', text: 'Intermediate' },
            { value: '100', text: 'Expert' },
        ]
    },
    getters: {
        getSocialNetworksList: state => { return  state.socialNetworksList },
        getFullName: state => { return  state.form.fullName },
        getJob: state => { return  state.form.job },
        getPhone: state => { return  state.form.phone },
        getEmail: state => { return  state.form.email },
        getLinks: state => { return  state.form.links },
        getSocialNetworks: state => { return  state.form.socialNetworks },
        getResume: state => { return  state.form.resume },
        getExperiences: state => { return  state.form.experiences },
        getProjects: state => { return  state.form.projects },
        getEducations: state => { return  state.form.educations },
        getSkills: state => { return  state.form.skills },
        getLanguages: state => { return  state.form.languages },
        getInterests: state => { return  state.form.interests },
    },
    mutations: {
        updateStateField (state, payload) {
            // mutate state
            state.form[payload.field] = payload.value
        },
        appendStateField (state, payload) {
            // mutate state
            state.form[payload.field].push(payload.value)
        }
    },
});