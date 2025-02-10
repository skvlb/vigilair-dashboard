
import { Bell, Camera, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const AlertCard = ({ level, title, time }: { level: 'low' | 'medium' | 'high', title: string, time: string }) => (
  <div className="alert-card">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full bg-alert-${level}`} />
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <Eye className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

const Index = () => {
  const [isActivated, setIsActivated] = useState(true);
  const { toast } = useToast();

  const toggleSystem = () => {
    setIsActivated(!isActivated);
    toast({
      title: isActivated ? "Système désactivé" : "Système activé",
      description: isActivated ? "La surveillance est en pause" : "La surveillance est en cours",
    });
  };

  return (
    <Layout>
      <div className="animate-fade-in space-y-6">
        {/* En-tête */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Tableau de bord</h1>
            <p className="text-gray-400">Aperçu de votre système de sécurité</p>
          </div>
          <Button
            onClick={toggleSystem}
            variant={isActivated ? "destructive" : "default"}
            className="transition-all duration-300"
          >
            {isActivated ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Désactiver
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Activer
              </>
            )}
          </Button>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Flux vidéo */}
          <Card className="md:col-span-2 aspect-video glass-card flex items-center justify-center">
            <div className="text-center">
              <Camera className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-white">Flux vidéo</h3>
              <p className="text-sm text-gray-400">Placeholder pour le flux vidéo en direct</p>
            </div>
          </Card>

          {/* Dernières alertes */}
          <Card className="glass-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-white">Dernières alertes</h2>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <AlertCard
                level="high"
                title="Mouvement détecté"
                time="Il y a 5 minutes"
              />
              <AlertCard
                level="medium"
                title="Son suspect"
                time="Il y a 15 minutes"
              />
              <AlertCard
                level="low"
                title="Caméra 2 connectée"
                time="Il y a 1 heure"
              />
            </div>
          </Card>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Caméras actives", "Alertes aujourd'hui", "Zones surveillées", "Dernière détection"].map((stat, index) => (
            <Card key={index} className="glass-card p-4">
              <h3 className="text-sm text-gray-400">{stat}</h3>
              <p className="text-2xl font-bold text-white mt-1">
                {index === 0 ? "2/4" : index === 1 ? "12" : index === 2 ? "3" : "5m"}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
