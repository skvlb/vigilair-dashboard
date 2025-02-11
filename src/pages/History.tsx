
import { Calendar, Download, History as HistoryIcon } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const History = () => {
  const events = [
    {
      id: 1,
      date: "2024-02-20 15:30",
      type: "Mouvement détecté",
      camera: "Caméra entrée",
      severity: "low",
    },
    {
      id: 2,
      date: "2024-02-20 14:15",
      type: "Personne détectée",
      camera: "Caméra jardin",
      severity: "medium",
    },
    {
      id: 3,
      date: "2024-02-20 12:45",
      type: "Son suspect",
      camera: "Caméra garage",
      severity: "high",
    },
    {
      id: 4,
      date: "2024-02-20 10:30",
      type: "Mouvement détecté",
      camera: "Caméra salon",
      severity: "low",
    },
    {
      id: 5,
      date: "2024-02-20 09:15",
      type: "Personne détectée",
      camera: "Caméra entrée",
      severity: "medium",
    },
  ];

  return (
    <Layout>
      <div className="animate-fade-in space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HistoryIcon className="h-8 w-8 text-gray-900" />
            <h1 className="text-2xl font-bold text-gray-900">Historique</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="glass-card flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-900">
              <Calendar className="h-5 w-5" />
              <span>Filtrer</span>
            </button>
            <button className="glass-card flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-gray-900">
              <Download className="h-5 w-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-gray-900">Événements récents</CardTitle>
            <CardDescription className="text-gray-600">
              Historique des dernières détections et alertes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`glass-card p-4 rounded-lg border-l-4 ${
                      event.severity === "low"
                        ? "border-l-alert-low"
                        : event.severity === "medium"
                        ? "border-l-alert-medium"
                        : "border-l-alert-high"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-gray-900 font-medium">{event.type}</h3>
                        <p className="text-gray-600 text-sm">{event.camera}</p>
                      </div>
                      <p className="text-gray-600 text-sm">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default History;

