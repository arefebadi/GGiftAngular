"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const hamper_component_1 = require("./hamper/hamper.component");
const appRoutes = [
    {
        path: 'hamplist',
        component: hamper_component_1.HampersComponent
    },
    {
        path: '**',
        component: hamper_component_1.HampersComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map