
import { Bell, Camera, History, Home, Moon, Settings, Sun } from "lucide-react";
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
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const menuItems = [
  { title: "Tableau de bord", icon: Home, path: "/" },
  { title: "Alertes", icon: Bell, path: "/alerts" },
  { title: "Vidéo Live", icon: Camera, path: "/live" },
  { title: "Historique", icon: History, path: "/history" },
  { title: "Paramètres", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <SidebarRoot>
      <SidebarContent className="bg-background border-r border-border">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">
              VigilAir
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Basculer le thème</span>
            </Button>
          </div>
        </div>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    className={`sidebar-link ${
                      location.pathname === item.path
                        ? "active"
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
