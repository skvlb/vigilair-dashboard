
import { Bell, Camera, History, Home, Settings } from "lucide-react";
import { 
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Tableau de bord", icon: Home, path: "/" },
  { title: "Alertes", icon: Bell, path: "/alerts" },
  { title: "Vidéo Live", icon: Camera, path: "/live" },
  { title: "Historique", icon: History, path: "/history" },
  { title: "Paramètres", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <SidebarRoot>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-white">VigilAir</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    className={`sidebar-link ${
                      location.pathname === item.path
                        ? "bg-white/20"
                        : ""
                    }`}
                  >
                    <Link to={item.path}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarRoot>
  );
};

export default Sidebar;
