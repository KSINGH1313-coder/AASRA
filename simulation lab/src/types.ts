export type Severity = 'Moderate' | 'High' | 'Critical'
export type Duration = 2 | 6 | 12 | 24
export type SimulationStatus = 'idle' | 'running' | 'complete'

export interface Corridor { id: string; name: string; startLocation: string; endLocation: string; districts: string[]; riskScore: number; alternateRouteIds: string[]; capacity: 'High' | 'Medium' | 'Low'; travelTime: number }
export interface Mission { missionId: string; origin: string; destination: string; cargoType: string; priority: number; vehicleId: string; route: string[]; estimatedTime: number; risk: number; status: 'In Transit' | 'Staged' | 'Rerouted'; district: string }
export interface Vehicle { vehicleId: string; missionId: string; currentLocation: string; destination: string; status: 'Moving' | 'Staged' | 'Delayed' | 'Rerouted'; eta: string; route: string[] }
export interface District { id: string; name: string; state: string; accessibilityScore: number; population: number; essentialSupplyRisk: number }
export interface Scenario { corridorId: string; disruptionType: string; duration: Duration; severity: Severity }
export interface AlternateRoute { id: string; name: string; eta: number; risk: number; disruptionProbability: number; capacity: 'High' | 'Medium' | 'Low'; score: number; recommendation: string; missionId: string }
export interface SimulationResult { scenario: Scenario; affectedMissions: Mission[]; affectedVehicles: Vehicle[]; affectedDistricts: District[]; alternateRoutes: AlternateRoute[]; criticalMissions: Mission[]; supplyChainsAtRisk: number; networkRisk: 'Moderate' | 'High' | 'Critical'; averageDelay: number; criticalMissionRisk: number; timeline: { time: string; event: string }[] }
export interface InterventionPlan { recommendations: { title: string; reason: string; priority: 'P0' | 'P1' | 'P2'; effect: string }[]; afterRisk: number; delay: number; protected: number }
