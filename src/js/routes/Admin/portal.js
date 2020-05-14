import { Dashboard } from "js/components/admin/components/dasboard/dashboard";
import { Others } from 'js/components/admin/components/others/others';

export const portalRoutes = [
    {
        path: "/admin/settings",
        component: Others
    },
    {
        path: "/admin/appointments",
        component: Others
    },
    {
        path: "/admin/reviews",
        component: Others
    },
    {
        path: "/admin/visitors",
        component: Others
    },
    {
        path: "/admin/website",
        component: Others
    },
    {
        path: "/",
        component: Dashboard
    }
]
