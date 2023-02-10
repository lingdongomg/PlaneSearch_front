import Vue from 'vue'
import Router from 'vue-router'
import FlightSearch from '../components/FlightSearch.vue'
// import TestDemo from "@/components/TestDemo";

// import createRouter from 'vue-router'
// import createWebHistory from 'vue-router'


Vue.use(Router)
export default new Router({
    // history: createWebHashHistory(),
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'FlightSearch',
            component: FlightSearch,
        },
        // {
        //     path: '/test',
        //     name: 'TestDemo',
        //     component: TestDemo,
        // }
    ]
});



// const router= createRouter({
//       history: createWebHistory(""),
//       routes:[
//         {
//           path: '/',
//           name:"searchTickets",
//           component: () => import("../components/FlightSearch")
//         }
//       ]
// })
//
// export default router;

