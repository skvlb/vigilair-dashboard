
import { Camera, Settings as SettingsIcon, Bell, Globe, Shield, UserCog } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Settings = () => {
  const settingsGroups = [
    {
      title: "Caméras",
      description: "Gérez vos caméras connectées",
      icon: Camera,
      settings: [
        { label: "Nom de la caméra", placeholder: "Caméra principale" },
        { label: "Résolution", placeholder: "1080p" },
      ],
    },
    {
      title: "Notifications",
      description: "Configurez vos préférences de notification",
      icon: Bell,
      settings: [
        { label: "Email", placeholder: "exemple@email.com" },
        { label: "Fréquence", placeholder: "Temps réel" },
      ],
    },
    {
      title: "Système",
      description: "Paramètres généraux du système",
      icon: Globe,
      settings: [
        { label: "Fuseau horaire", placeholder: "Europe/Paris" },
        { label: "Langue", placeholder: "Français" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center gap-2">
          <SettingsIcon className="h-8 w-8 text-gray-900" />
          <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {settingsGroups.map((group) => (
            <Card key={group.title} className="glass-card">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <group.icon className="h-5 w-5 text-gray-900" />
                  <CardTitle className="text-gray-900">{group.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.settings.map((setting) => (
                  <div key={setting.label} className="space-y-2">
                    <Label className="text-gray-900">{setting.label}</Label>
                    <Input placeholder={setting.placeholder} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Settings;

