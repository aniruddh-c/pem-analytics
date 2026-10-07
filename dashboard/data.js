// Auto-generated TASL PEM AI Reliability Engineer Data Engine
window.TASL_PLANTS = [
  {
    "id": "TASL-NGP",
    "name": "TASL-NGP",
    "fullName": "TASL Defense & Aerostructures - Nagpur",
    "totalMachines": 16,
    "running": 9,
    "idle": 2,
    "alarm": 1,
    "shutdown": 2,
    "breakdown": 2
  },
  {
    "id": "TSAL",
    "name": "TSAL",
    "fullName": "TSAL - Advanced Precision Machining Facility",
    "totalMachines": 12,
    "running": 6,
    "idle": 3,
    "alarm": 2,
    "shutdown": 0,
    "breakdown": 1
  },
  {
    "id": "TCOE",
    "name": "TCOE",
    "fullName": "Tata Center of Excellence - Advanced Manufacturing",
    "totalMachines": 8,
    "running": 5,
    "idle": 0,
    "alarm": 0,
    "shutdown": 3,
    "breakdown": 0
  },
  {
    "id": "TASL-BLR",
    "name": "TASL-BLR",
    "fullName": "TASL Aero Avionics & Systems - Bengaluru",
    "totalMachines": 6,
    "running": 4,
    "idle": 1,
    "alarm": 0,
    "shutdown": 1,
    "breakdown": 0
  },
  {
    "id": "TASL-XXX",
    "name": "TASL-XXX",
    "fullName": "TASL-XXX (Future Facility Expansion)",
    "totalMachines": 0,
    "running": 0,
    "idle": 0,
    "alarm": 0,
    "shutdown": 0,
    "breakdown": 0
  }
];
window.TASL_MACHINES = [
  {
    "id": "bavius-01",
    "plantId": "TASL-NGP",
    "name": "Bavius HBZ AeroCell 200/100",
    "model": "HBZ Compact Cell 200/100",
    "oem": "Bavius Technologie GmbH",
    "stationId": "MS-01-02",
    "plantLocation": "TASL-NGP - Precision Machining Bay",
    "status": "ALARM",
    "statusColor": "amber",
    "healthScore": 68,
    "greenCount": 50,
    "yellowCount": 9,
    "redCount": 3,
    "statusDuration": "01H 14M 22S",
    "desc": "Horizontal High-Speed CNC Machining Center with 30,000 RPM Fischer MFW-1920 Spindle, dual gantry drives, tool magazine, and vacuum clamping."
  },
  {
    "id": "fanuc-01",
    "plantId": "TASL-NGP",
    "name": "Fanuc Robodrill \u03b1-D21LiB5",
    "model": "5-Axis High-Speed VMC",
    "oem": "FANUC Corporation",
    "stationId": "AE-02-04",
    "plantLocation": "TASL-NGP - High-Speed Drilling Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 92,
    "greenCount": 62,
    "yellowCount": 2,
    "redCount": 0,
    "statusDuration": "04H 28M 11S",
    "desc": "5-axis rapid aluminum drilling & milling cell with BBT30 24,000 RPM spindle."
  },
  {
    "id": "breton-k60",
    "plantId": "TASL-NGP",
    "name": "Breton K60 5-Axis",
    "model": "Matrix 800 - 60k RPM",
    "oem": "Breton S.p.A.",
    "stationId": "MS-03-15",
    "plantLocation": "TASL-NGP - High Precision Bay 2",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 79,
    "greenCount": 60,
    "yellowCount": 8,
    "redCount": 2,
    "statusDuration": "00H 24M 11S",
    "desc": "High-speed 5-axis gantry with hydrostatic guideways and 60,000 RPM electrospindle."
  },
  {
    "id": "breton-k80",
    "plantId": "TASL-NGP",
    "name": "Breton K80 Heavy Gantry",
    "model": "Flymill 2000 Titanium Cell",
    "oem": "Breton S.p.A.",
    "stationId": "MSD_MS-03-16",
    "plantLocation": "TASL-NGP - Heavy Structural Bay",
    "status": "SHUTDOWN",
    "statusColor": "blue",
    "healthScore": 95,
    "greenCount": 62,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "02H 44M 11S",
    "desc": "Heavy-duty 5-axis gantry machine for titanium aerospace structural bulkheads."
  },
  {
    "id": "makino-t1",
    "plantId": "TASL-NGP",
    "name": "Makino T1 5-Axis",
    "model": "ADV Titanium Machining Center",
    "oem": "Makino Milling Machine Co.",
    "stationId": "MS-02-09",
    "plantLocation": "TASL-NGP - Titanium Complex Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 88,
    "greenCount": 61,
    "yellowCount": 3,
    "redCount": 1,
    "statusDuration": "06H 12M 40S",
    "desc": "High-torque 1,000 Nm spindle titanium machining center with autonomous pallet changer."
  },
  {
    "id": "modig-03c",
    "plantId": "TASL-NGP",
    "name": "Modig HHV3 C",
    "model": "Horizontal High Velocity Extrusion Cell",
    "oem": "Modig Machine Tool Sweden",
    "stationId": "MS-04-01",
    "plantLocation": "TASL-NGP - Extrusion Milling Bay",
    "status": "BREAKDOWN",
    "statusColor": "red",
    "healthScore": 42,
    "greenCount": 51,
    "yellowCount": 9,
    "redCount": 4,
    "statusDuration": "03H 45M 14S",
    "desc": "Aerospace beam and stringer continuous bar-feed machining center."
  },
  {
    "id": "makino-mag3",
    "plantId": "TASL-NGP",
    "name": "Makino MAG3 5-Axis",
    "model": "MAG3.EX Horizontal Profiler",
    "oem": "Makino Milling Machine Co.",
    "stationId": "MS-01-08",
    "plantLocation": "TASL-NGP - Wing Spar Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 89,
    "greenCount": 61,
    "yellowCount": 4,
    "redCount": 1,
    "statusDuration": "05H 22M 19S",
    "desc": "5-axis horizontal profiler for aerospace structural aluminum monolithic components."
  },
  {
    "id": "dmg-dmu80",
    "plantId": "TASL-NGP",
    "name": "DMG MORI DMU 80 P",
    "model": "duoBLOCK 5-Axis Mill-Turn",
    "oem": "DMG MORI AG",
    "stationId": "MS-02-14",
    "plantLocation": "TASL-NGP - Engine Mount Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 94,
    "greenCount": 62,
    "yellowCount": 2,
    "redCount": 0,
    "statusDuration": "07H 15M 00S",
    "desc": "Universal mill-turn center with high dynamic duoBLOCK structure."
  },
  {
    "id": "starrag-hec800",
    "plantId": "TASL-NGP",
    "name": "Starrag Heckert HEC 800",
    "model": "HEC 800 X5 High-Torque",
    "oem": "Starrag Group Switzerland",
    "stationId": "MS-03-04",
    "plantLocation": "TASL-NGP - Inconel & Titanium Cell",
    "status": "IDLE",
    "statusColor": "amber",
    "healthScore": 82,
    "greenCount": 58,
    "yellowCount": 6,
    "redCount": 1,
    "statusDuration": "00H 52M 30S",
    "desc": "High precision 5-axis machining center for tough aircraft alloys and landing gear."
  },
  {
    "id": "matsuura-mam72",
    "plantId": "TASL-NGP",
    "name": "Matsuura MAM72-63V",
    "model": "5-Axis High Performance Center",
    "oem": "Matsuura Machinery Corp.",
    "stationId": "MS-02-18",
    "plantLocation": "TASL-NGP - Precision Actuator Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 91,
    "greenCount": 62,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "08H 40M 12S",
    "desc": "Multi-pallet 5-axis machining center dedicated to aerospace valve manifold housings."
  },
  {
    "id": "mazak-vortex",
    "plantId": "TASL-NGP",
    "name": "Mazak Vortex i-800V/8",
    "model": "5-Axis Vertical Machining Center",
    "oem": "Yamazaki Mazak Corp.",
    "stationId": "MS-01-11",
    "plantLocation": "TASL-NGP - Bulkhead Profiling Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 87,
    "greenCount": 60,
    "yellowCount": 5,
    "redCount": 0,
    "statusDuration": "03H 18M 45S",
    "desc": "Vertical 5-axis machining center with tilting spindle head for aero components."
  },
  {
    "id": "bavius-aerocell",
    "plantId": "TASL-NGP",
    "name": "Bavius HBZ AeroCell 500",
    "model": "HBZ AeroCell Horizontal HPC",
    "oem": "Bavius Technologie GmbH",
    "stationId": "MS-01-05",
    "plantLocation": "TASL-NGP - High-Velocity Milling Bay",
    "status": "IDLE",
    "statusColor": "amber",
    "healthScore": 76,
    "greenCount": 56,
    "yellowCount": 8,
    "redCount": 2,
    "statusDuration": "01H 08M 10S",
    "desc": "High-velocity horizontal aerostructure machining cell with pallet automation."
  },
  {
    "id": "grob-g550",
    "plantId": "TASL-NGP",
    "name": "Grob G550 5-Axis",
    "model": "G550 Universal Machining Center",
    "oem": "GROB-WERKE GmbH & Co. KG",
    "stationId": "MS-03-22",
    "plantLocation": "TASL-NGP - Precision Flap Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 93,
    "greenCount": 62,
    "yellowCount": 2,
    "redCount": 0,
    "statusDuration": "09H 04M 50S",
    "desc": "Horizontal spindle arrangement with maximum axis stability and tunnel concept."
  },
  {
    "id": "hermle-c52",
    "plantId": "TASL-NGP",
    "name": "Hermle C 52 U MT",
    "model": "C 52 Dynamic Mill-Turn",
    "oem": "Maschinenfabrik Berthold Hermle AG",
    "stationId": "MS-02-01",
    "plantLocation": "TASL-NGP - Turbine Discs Cell",
    "status": "SHUTDOWN",
    "statusColor": "blue",
    "healthScore": 96,
    "greenCount": 62,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "04H 12M 00S",
    "desc": "Dynamic 5-axis machining center for complex engine pylon brackets and mounts."
  },
  {
    "id": "okuma-mu8000",
    "plantId": "TASL-NGP",
    "name": "Okuma MU-8000V",
    "model": "MU-8000V Laser EX Hybrid",
    "oem": "Okuma Corporation",
    "stationId": "MS-04-10",
    "plantLocation": "TASL-NGP - Additive & Subtractive Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 90,
    "greenCount": 61,
    "yellowCount": 3,
    "redCount": 1,
    "statusDuration": "02H 30M 14S",
    "desc": "Hybrid additive & 5-axis subtractive manufacturing center for aerospace prototyping."
  },
  {
    "id": "chiron-fz15",
    "plantId": "TASL-NGP",
    "name": "Chiron FZ 15W High-Speed",
    "model": "FZ 15W Twin-Spindle VMC",
    "oem": "CHIRON Group SE",
    "stationId": "MS-01-20",
    "plantLocation": "TASL-NGP - Secondary Bracket Line",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 85,
    "greenCount": 60,
    "yellowCount": 4,
    "redCount": 0,
    "statusDuration": "05H 45M 30S",
    "desc": "Twin-spindle high-speed vertical center with basket tool changer (0.9s chip-to-chip)."
  },
  {
    "id": "tsal-modig-01",
    "plantId": "TSAL",
    "name": "Modig HHV3 Extrusion Cell",
    "model": "HHV-3 High Speed Extrusion",
    "oem": "Modig Machine Tool",
    "stationId": "TSAL-EXT-01",
    "plantLocation": "TSAL - Aerostructures Bay A",
    "status": "BREAKDOWN",
    "statusColor": "red",
    "healthScore": 42,
    "greenCount": 40,
    "yellowCount": 12,
    "redCount": 4,
    "statusDuration": "02H 14M 08S",
    "desc": "High velocity horizontal machining center for aerospace stringers and extruded structural profiles."
  },
  {
    "id": "tsal-breton-01",
    "plantId": "TSAL",
    "name": "Breton Flymill 2000",
    "model": "Flymill 5-Axis CNC",
    "oem": "Breton S.p.A.",
    "stationId": "TSAL-FM-02",
    "plantLocation": "TSAL - Precision Machining Bay",
    "status": "ALARM",
    "statusColor": "amber",
    "healthScore": 71,
    "greenCount": 52,
    "yellowCount": 8,
    "redCount": 2,
    "statusDuration": "00H 48M 19S",
    "desc": "High-performance gantry machining center with continuous 5-axis contouring for wing spars."
  },
  {
    "id": "tsal-makino-01",
    "plantId": "TSAL",
    "name": "Makino MAG3.EX",
    "model": "5-Axis Horizontal High-Speed",
    "oem": "Makino Milling Machine Co.",
    "stationId": "TSAL-MK-03",
    "plantLocation": "TSAL - Aerostructures Bay B",
    "status": "ALARM",
    "statusColor": "amber",
    "healthScore": 74,
    "greenCount": 54,
    "yellowCount": 7,
    "redCount": 1,
    "statusDuration": "01H 05M 33S",
    "desc": "Ultra high-power 33,000 RPM titanium and aluminum monolith wing-rib machining cell."
  },
  {
    "id": "tsal-fanuc-01",
    "plantId": "TSAL",
    "name": "Fanuc Robodrill \u03b1-D21LiB5",
    "model": "High-Speed Drilling & Tapping",
    "oem": "FANUC Corporation",
    "stationId": "TSAL-RD-04",
    "plantLocation": "TSAL - Fastener & Flange Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 96,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "06H 12M 40S",
    "desc": "Compact CNC drilling and tapping center for high-volume aerospace bracket fabrication."
  },
  {
    "id": "tsal-dmg-01",
    "plantId": "TSAL",
    "name": "DMG MORI DMC 125 FD",
    "model": "duoBLOCK Mill-Turn 5-Axis",
    "oem": "DMG MORI AG",
    "stationId": "TSAL-DM-05",
    "plantLocation": "TSAL - Heavy Turning Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 93,
    "greenCount": 61,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "05H 41M 12S",
    "desc": "5-axis simultaneous milling and turning duoBLOCK for engine casing rings and bulkheads."
  },
  {
    "id": "tsal-hermle-01",
    "plantId": "TSAL",
    "name": "Hermle C 42 U MT",
    "model": "High-Precision 5-Axis Dynamic",
    "oem": "Maschinenfabrik Berthold Hermle AG",
    "stationId": "TSAL-HM-06",
    "plantLocation": "TSAL - Impeller & Blisk Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 94,
    "greenCount": 62,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "07H 19M 02S",
    "desc": "High dynamic 5-axis machining center for aerospace blisks and complex fuel nozzles."
  },
  {
    "id": "tsal-chiron-01",
    "plantId": "TSAL",
    "name": "Chiron DZ 15 W",
    "model": "Dual-Spindle High-Speed",
    "oem": "CHIRON Group SE",
    "stationId": "TSAL-CH-07",
    "plantLocation": "TSAL - Twin Spindle Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 91,
    "greenCount": 59,
    "yellowCount": 3,
    "redCount": 0,
    "statusDuration": "03H 55M 19S",
    "desc": "Twin-spindle high rate production machining center for aerospace titanium link fittings."
  },
  {
    "id": "tsal-mazak-01",
    "plantId": "TSAL",
    "name": "Mazak VARIAXIS i-800",
    "model": "5-Axis Multi-Tasking Center",
    "oem": "Yamazaki Mazak Corp.",
    "stationId": "TSAL-MZ-08",
    "plantLocation": "TSAL - Main Precision Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 89,
    "greenCount": 58,
    "yellowCount": 4,
    "redCount": 0,
    "statusDuration": "04H 10M 55S",
    "desc": "Simultaneous 5-axis vertical machining center for aerospace structural bulkhead lugs."
  },
  {
    "id": "tsal-grob-01",
    "plantId": "TSAL",
    "name": "GROB G550 5-Axis",
    "model": "Universal Machining Center",
    "oem": "GROB-WERKE GmbH & Co. KG",
    "stationId": "TSAL-GB-09",
    "plantLocation": "TSAL - Pallet Automation Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 95,
    "greenCount": 62,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "06H 48M 01S",
    "desc": "Horizontal spindle arrangement with upside-down swivel-rotary table for chip evacuation."
  },
  {
    "id": "tsal-starrag-01",
    "plantId": "TSAL",
    "name": "Starrag STC 800",
    "model": "Titanium Machining Center",
    "oem": "Starrag Group",
    "stationId": "TSAL-ST-10",
    "plantLocation": "TSAL - Titanium Wing Bay",
    "status": "IDLE",
    "statusColor": "yellow",
    "healthScore": 88,
    "greenCount": 58,
    "yellowCount": 4,
    "redCount": 0,
    "statusDuration": "01H 20M 14S",
    "desc": "Heavy-duty horizontal center tailored for tough titanium alloys and aerospace structural forgings."
  },
  {
    "id": "tsal-haas-01",
    "plantId": "TSAL",
    "name": "Haas VF-4SS Super-Speed",
    "model": "High-Speed VMC 12k RPM",
    "oem": "Haas Automation Inc.",
    "stationId": "TSAL-HS-11",
    "plantLocation": "TSAL - General Machining Bay",
    "status": "IDLE",
    "statusColor": "yellow",
    "healthScore": 86,
    "greenCount": 56,
    "yellowCount": 5,
    "redCount": 0,
    "statusDuration": "00H 55M 32S",
    "desc": "Super-speed vertical machining center for tooling, fixtures, and secondary trim machining."
  },
  {
    "id": "tsal-zeiss-01",
    "plantId": "TSAL",
    "name": "Zeiss PRISMO Ultra 3D",
    "model": "Coordinate Measuring Machine",
    "oem": "Carl Zeiss AG",
    "stationId": "TSAL-ZS-12",
    "plantLocation": "TSAL - Metrology & Quality Lab",
    "status": "IDLE",
    "statusColor": "yellow",
    "healthScore": 99,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "02H 05M 18S",
    "desc": "Ultra-high accuracy sub-micron CMM for final inspection of AS9100 aerospace flight articles."
  },
  {
    "id": "tcoe-makino-01",
    "plantId": "TCOE",
    "name": "Makino T2 5-Axis Titanium",
    "model": "T-Series Titanium Specialist",
    "oem": "Makino Milling Machine Co.",
    "stationId": "TCOE-MK-01",
    "plantLocation": "TCOE - Advanced Titanium Center",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 98,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "08H 15M 00S",
    "desc": "5-axis horizontal machining center with 1000 Nm high-torque spindle for titanium engine pylons."
  },
  {
    "id": "tcoe-breton-01",
    "plantId": "TCOE",
    "name": "Breton Matrix 1000",
    "model": "High-Speed Gantry 5-Axis",
    "oem": "Breton S.p.A.",
    "stationId": "TCOE-BR-02",
    "plantLocation": "TCOE - Composites & Aero Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 97,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "06H 30M 45S",
    "desc": "Linear motor driven 5-axis gantry center for aerospace composites and carbon-fiber trimming."
  },
  {
    "id": "tcoe-hermle-01",
    "plantId": "TCOE",
    "name": "Hermle C 62 U MT Dynamic",
    "model": "Large-Scale 5-Axis Mill-Turn",
    "oem": "Maschinenfabrik Berthold Hermle AG",
    "stationId": "TCOE-HM-03",
    "plantLocation": "TCOE - Turbine Component Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 95,
    "greenCount": 61,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "05H 40M 20S",
    "desc": "Heavy-duty 5-axis dynamic mill-turn center for gas turbine discs and rotating aero components."
  },
  {
    "id": "tcoe-dmg-01",
    "plantId": "TCOE",
    "name": "DMG MORI LASERTEC 65 3D",
    "model": "Hybrid Additive & 5-Axis Milling",
    "oem": "DMG MORI AG",
    "stationId": "TCOE-LT-04",
    "plantLocation": "TCOE - Additive Manufacturing Lab",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 96,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "09H 12M 15S",
    "desc": "Laser metal deposition hybrid 5-axis machining center for rocket engine regenerative cooling jackets."
  },
  {
    "id": "tcoe-zeiss-01",
    "plantId": "TCOE",
    "name": "Zeiss X-Ray CT METROTOM",
    "model": "Industrial Computed Tomography",
    "oem": "Carl Zeiss AG",
    "stationId": "TCOE-CT-05",
    "plantLocation": "TCOE - NDT & Non-Destructive Lab",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 99,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "11H 00M 00S",
    "desc": "High resolution industrial CT scanner for internal void and defect inspection in 3D printed aero components."
  },
  {
    "id": "tcoe-grob-01",
    "plantId": "TCOE",
    "name": "GROB G750 5-Axis",
    "model": "Universal 5-Axis Center",
    "oem": "GROB-WERKE GmbH & Co. KG",
    "stationId": "TCOE-GB-06",
    "plantLocation": "TCOE - Heavy Structures Bay",
    "status": "SHUTDOWN",
    "statusColor": "blue",
    "healthScore": 100,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "18H 30M 00S",
    "desc": "Scheduled tooling overhaul and calibration for landing gear strut machining cell."
  },
  {
    "id": "tcoe-matsuura-01",
    "plantId": "TCOE",
    "name": "Matsuura LUMEX Avance-25",
    "model": "Metal 3D Laser Sintering & Mill",
    "oem": "Matsuura Machinery Corp.",
    "stationId": "TCOE-MA-07",
    "plantLocation": "TCOE - R&D Additive Cell",
    "status": "SHUTDOWN",
    "statusColor": "blue",
    "healthScore": 100,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "24H 00M 00S",
    "desc": "Hybrid selective laser sintering and high-speed milling center under planned nitrogen supply maintenance."
  },
  {
    "id": "tcoe-waldrich-01",
    "plantId": "TCOE",
    "name": "Waldrich Coburg Taurus 30",
    "model": "Portal Milling Machine",
    "oem": "Waldrich Coburg GmbH",
    "stationId": "TCOE-WC-08",
    "plantLocation": "TCOE - Mega Structure Bay",
    "status": "SHUTDOWN",
    "statusColor": "blue",
    "healthScore": 100,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "14H 15M 00S",
    "desc": "Heavy portal milling machine under scheduled geometric laser interferometer recertification."
  },
  {
    "id": "blr-fanuc-01",
    "plantId": "TASL-BLR",
    "name": "Fanuc Robodrill \u03b1-D14MiB5",
    "model": "Avionics Precision CNC",
    "oem": "FANUC Corporation",
    "stationId": "BLR-AV-01",
    "plantLocation": "TASL-BLR - Avionics Chassis Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 97,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "05H 50M 00S",
    "desc": "High precision CNC milling center for radar transmit/receive module housings and microwave filters."
  },
  {
    "id": "blr-datron-01",
    "plantId": "TASL-BLR",
    "name": "DATRON M8Cube High-Speed",
    "model": "High-Speed Micro-Milling",
    "oem": "DATRON AG",
    "stationId": "BLR-DT-02",
    "plantLocation": "TASL-BLR - Micro-Machining Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 96,
    "greenCount": 61,
    "yellowCount": 1,
    "redCount": 0,
    "statusDuration": "07H 10M 15S",
    "desc": "60,000 RPM high speed machining center for electronic enclosure cooling micro-channels."
  },
  {
    "id": "blr-hermle-01",
    "plantId": "TASL-BLR",
    "name": "Hermle C 22 U 5-Axis",
    "model": "Dynamic Precision 5-Axis",
    "oem": "Maschinenfabrik Berthold Hermle AG",
    "stationId": "BLR-HM-03",
    "plantLocation": "TASL-BLR - Optical Mount Cell",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 98,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "08H 35M 40S",
    "desc": "Sub-micron accuracy 5-axis machining center for airborne gimbal mounts and seeker optical housings."
  },
  {
    "id": "blr-dmg-01",
    "plantId": "TASL-BLR",
    "name": "DMG MORI NTX 1000 2nd Gen",
    "model": "Compact Turn-Mill Center",
    "oem": "DMG MORI AG",
    "stationId": "BLR-DM-04",
    "plantLocation": "TASL-BLR - Actuator Fabrication Bay",
    "status": "RUNNING",
    "statusColor": "green",
    "healthScore": 94,
    "greenCount": 60,
    "yellowCount": 2,
    "redCount": 0,
    "statusDuration": "04H 20M 10S",
    "desc": "Precision multi-axis turn-mill center for flight-control electro-mechanical servo actuator bodies."
  },
  {
    "id": "blr-haas-01",
    "plantId": "TASL-BLR",
    "name": "Haas Mini Mill 2",
    "model": "Compact CNC VMC",
    "oem": "Haas Automation Inc.",
    "stationId": "BLR-HS-05",
    "plantLocation": "TASL-BLR - Harness Bracket Bay",
    "status": "IDLE",
    "statusColor": "yellow",
    "healthScore": 89,
    "greenCount": 59,
    "yellowCount": 3,
    "redCount": 0,
    "statusDuration": "01H 45M 00S",
    "desc": "Compact vertical machining center for rapid prototyping of avionics wiring harness brackets."
  },
  {
    "id": "blr-zeiss-01",
    "plantId": "TASL-BLR",
    "name": "Zeiss MICURA CMM",
    "model": "Compact High-Precision CMM",
    "oem": "Carl Zeiss AG",
    "stationId": "BLR-ZS-06",
    "plantLocation": "TASL-BLR - Clean Room Metrology",
    "status": "SHUTDOWN",
    "statusColor": "blue",
    "healthScore": 100,
    "greenCount": 62,
    "yellowCount": 0,
    "redCount": 0,
    "statusDuration": "12H 00M 00S",
    "desc": "Class 10,000 cleanroom coordinate measuring machine under scheduled sensor probe calibration."
  }
];
window.TOP_BREAKDOWN_CAUSES = [
  {
    "rank": 1,
    "title": "Spindle Over-Temperature & Stator Saturation",
    "incidents": 17,
    "downtime": "85.33 hrs",
    "severity": "Critical",
    "param": "Spindle Motor Temp (> 60\u00b0C)",
    "rcca": "Continuous high-speed milling without adequate chiller recooler dwell. Root Cause Corrective Action: De-scale KRA150 chiller heat exchanger, replace G4 air filter mat, recalibrate flow monitor switch (alarm 700501), and execute graduated warm-up procedure.",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2 (Pg. 84-88) & Rittal KRA150 Chiller Manual Ch. 4.3 (Pg. 42)"
  },
  {
    "rank": 2,
    "title": "Spindle Nose Vibration & Bearing Dynamic Runout",
    "incidents": 14,
    "downtime": "46.20 hrs",
    "severity": "Critical",
    "param": "Spindle Nose Vib (> 4.5 mm/s)",
    "rcca": "Unbalanced long-reach arbor milling tools and hybrid ceramic bearing ball raceway micro-pitting. Root Cause Corrective Action: Dynamic balancing of tool assemblies to ISO 1940 G2.5, replace front hybrid ceramic bearing pair (HC-7014), and verify air-oil lubrication pulse dosing.",
    "manualCitation": "SiViB Record 31 Manual, Section 4.1 (Pg. 31) & Fischer Spindle Manual Ch. 4.3 (Pg. 52)"
  },
  {
    "rank": 3,
    "title": "Compressed Air Supply Pressure Loss (< 6.0 Bar)",
    "incidents": 13,
    "downtime": "24.50 hrs",
    "severity": "High",
    "param": "Pneumatic Supply (< 5.5 bar)",
    "rcca": "Shop-floor ring main pressure depression during simultaneous tool changers cycling or clogged 0.01\u00b5m coalescing filter. Root Cause Corrective Action: Service Festo MS6-LFM microfilter cartridge, clear condensate auto-drain trap, and set machine pressure switch 1S1 to 6.2 bar.",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3 (Pg. 116)"
  },
  {
    "rank": 4,
    "title": "Tool Changer (ATC) Gripper & Magazine Interruption",
    "incidents": 10,
    "downtime": "16.80 hrs",
    "severity": "High",
    "param": "Tool Clamping Belleville Force (< 18 kN)",
    "rcca": "Chips accumulation on inductive proximity sensor B47 or drawbar Belleville disc spring fatigue. Root Cause Corrective Action: Wash toolholder claw collets with ultrasonic solvent, clean sensor faces, and calibrate tool pull-in force with Ott-Jakob POWER-CHECK.",
    "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2 (Pg. 28-33)"
  },
  {
    "rank": 5,
    "title": "Axis Drive Motor Drag & Optical Scale Contamination",
    "incidents": 11,
    "downtime": "12.10 hrs",
    "severity": "Medium",
    "param": "Axis Y11/C11 Drive Torque (> 45 Nm)",
    "rcca": "Slideway hydraulic brake drag or sealing air purge pressure drop allowing fine aluminum chips onto Heidenhain linear glass scales. Root Cause Corrective Action: Check scale purge air pressure (alarm 700216), grease metering blocks, and perform brake test stop.",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 3.4 (Pg. 98) & SiViB Record 31 (Pg. 24)"
  }
];
window.OEM_MANUALS_DATA = [
  {
    "id": "man-spindle",
    "title": "Fischer MFW-1920/30/1 Spindle Operating & Maintenance Manual",
    "model": "MFW-1920/30/1 HSK-A63 Hybrid Ceramic Spindle",
    "pdfUrl": "manuals/04_Spindle/MFW_1920_30_1_EN.pdf",
    "pages": 123,
    "category": "Main Spindle",
    "highlights": "Rated 30,000 RPM HSC machining. Covers bearing temperature thresholds (50°C alarm, 65°C emergency trip), stator PTC thermistor resistance testing (< 3000 Ω), Ott-Jakob drawbar POWER-CHECK pull-in force calibration (min 18 kN), and dynamic runout limits (< 0.003 mm)."
  },
  {
    "id": "man-cooling",
    "title": "Rittal KRA150 Spindle Recooler / Chiller Technical Manual",
    "model": "KRA150A83369 Closed-Loop Spindle Chiller",
    "pdfUrl": "manuals/05_Cooling_Spindle/064  KRA150A83369_06_048657_122101316.pdf",
    "pages": 234,
    "category": "Cooling System",
    "highlights": "Closed-loop spindle chiller. Diagnoses collective fault 700502, low fluid level switch LE/AQ, high-pressure switch PA trip, condenser fin cleaning, and VGB-R 455 P coolant charging."
  },
  {
    "id": "man-filtration",
    "title": "Knoll KF 200/1800 Compact Filter System Instructions",
    "model": "KF 200 Filter Fleece & Sludge Tank System",
    "pdfUrl": "manuals/09_Cooling_Lubricant/12000063   110/2/11033782_75 515 401986_KF 200.pdf",
    "pages": 78,
    "category": "Coolant & Lubrication",
    "highlights": "Filter fleece advance mechanism and soil tank sludge management. Guides resolution of 701338 KF filter flooded, filter paper advance jam, float switch 2S1 cleaning, and chip conveyor overload."
  },
  {
    "id": "man-hydraulic",
    "title": "Bavius HBZ CC Hydraulic Schematic & Component Manual",
    "model": "HS-002-K617-2-AC02 Central Hydraulic System",
    "pdfUrl": "manuals/07_Hydraulic/HS-002-K617-2-AC02.pdf",
    "pages": 64,
    "category": "Hydraulics",
    "highlights": "Hydraulic pressure regulator 120 bar line clamping, pallet changer lock/unlock cylinders, counter-balance accumulator charging, and proportional valve testing."
  },
  {
    "id": "man-vibration",
    "title": "SiViB Record 31 Spindle Vibration & Bearing Monitor",
    "model": "SiViB Record 31 Accelerometer FFT Sensor",
    "pdfUrl": "manuals/14_Spindle_Control/SiViB_Record_31_Manual en.pdf",
    "pages": 53,
    "category": "Spindle Diagnostics",
    "highlights": "Spindle nose accelerometer FFT vibration monitoring. Configures warning limit 700730 and alarm limit 700731, toolholder dynamic unbalance (ISO 1940 G2.5), and bearing defect frequency tracking (BPFO/BPFI)."
  },
  {
    "id": "man-vacuum",
    "title": "VOC-AD-S-63/100 Vacuum Clamping Station Instructions",
    "model": "VOC Vakuumanlage AD S 63_100 Aerostructure Clamping",
    "pdfUrl": "manuals/13_Vacuum/VOC Vakuumanlage AD S 63_100 en.PDF",
    "pages": 42,
    "category": "Workholding",
    "highlights": "Monitors safe machining vacuum threshold at -600 mbar via pressure switch 1Z2. Outlines liquid feedback drainage (valve 2V2), silicone sealing gasket inspection, and vacuum pump oil servicing."
  },
  {
    "id": "man-operating",
    "title": "Bavius HBZ Compact Cell Operating Instructions",
    "model": "HBZ CC 200/100 5-Axis Horizontal High-Speed Machining",
    "pdfUrl": "manuals/00_Operating_Instructions/Operating instructions en.pdf",
    "pages": 298,
    "category": "Machine General",
    "highlights": "Full OEM PLC alarm registry (700100 - 701350). Step-by-step procedures for pallet changer recovery (Section 4.8), pneumatic service unit maintenance (Section 2.3), and Safety Integrated test stop."
  },
  {
    "id": "man-suction",
    "title": "AFS Air Filtration & Mist Suction System",
    "model": "AFS 1.07 Industrial Oil Mist Collector",
    "pdfUrl": "manuals/10_Suction/AFS_1.07_EN_US__Instruction_Manual.pdf",
    "pages": 38,
    "category": "Air Filtration",
    "highlights": "Enclosure negative pressure monitoring, HEPA filter differential pressure gauge, and automatic aerosol drainage."
  },
  {
    "id": "man-probe",
    "title": "Renishaw RMI-Q Radio Machine Probe Installation Guide",
    "model": "RMI-Q / RMP60 Multi-Probe Radio Transmission",
    "pdfUrl": "manuals/11_Radio_Probe/RMI-Q_Installation_guide.pdf",
    "pages": 46,
    "category": "Probing & Inspection",
    "highlights": "Radio transmission signal strength, channel pairing, battery status indicators, and kinematic stylus alignment."
  },
  {
    "id": "man-drive",
    "title": "HBZ Compact Cell Drive Diagram & Kinematics",
    "model": "Antriebsschema HBZ CC 200/100 Dual Gantry",
    "pdfUrl": "manuals/02_Drive_Diagramm/Antriebsschema_HBZ_CC_200_100.pdf",
    "pages": 18,
    "category": "Motion Drives",
    "highlights": "Tandem gantry kinematics (X11/X12), ballscrew pitch compensation, rotary axis C11 torque motor, and A11 swivel trunnion."
  },
  {
    "id": "man-tool",
    "title": "Tool Changer & Pneumatic Control Unit Operating Manual",
    "model": "Operating Instructions 146598 Automatic Tool Magazine",
    "pdfUrl": "manuals/12_Tool_Control/Operating instructions 146598 rev0-2_0-2 de en.pdf",
    "pages": 52,
    "category": "Tool Changer",
    "highlights": "Tool changer arm indexing, shutter door pneumatic cylinders, inductive proximity switch B47 alignment, and tool clamp verification."
  }
];
window.BAVIUS_PARAMETERS = [
  {
    "groupId": "spindle-dynamics",
    "groupName": "Main Spindle Dynamics & Thermal Monitoring (SP1)",
    "description": "Fischer MFW-1920/30/1 Hybrid Ceramic Spindle parameters, PT100 sensors, torque and motor power per Fischer Spindle Manual Ch. 7.2",
    "parameters": [
      {
        "tag": "BAVIUS_4MTR_SPINDLE_actSpeed",
        "name": "Spindle Actual Speed",
        "value": 23890.0,
        "unit": "RPM",
        "direction": "high",
        "min": 0,
        "max": 30000,
        "warnLimit": 25000.0,
        "alarmLimit": 28500.0,
        "normal": "0 - 25,000 RPM",
        "alarm": "> 28,500 RPM",
        "backendZone": "green",
        "sparkline": [
          0,
          8000,
          16000,
          22000,
          23800,
          23900,
          23850,
          23920,
          23870,
          23890
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_4M_SPINDLE_BEARING_TEMP_1",
        "name": "Spindle Front Bearing Temperature (DE)",
        "value": 33.4,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 15,
        "max": 65,
        "warnLimit": 45.0,
        "alarmLimit": 50.0,
        "normal": "20 - 45 \u00b0C",
        "alarm": "\u2265 50 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          26.0,
          27.2,
          28.5,
          29.8,
          31.0,
          32.1,
          32.8,
          33.0,
          33.2,
          33.4
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_4M_SPINDLE_BEARING_TEMP_2",
        "name": "Spindle Rear Bearing Temperature (NDE)",
        "value": 42.6,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 15,
        "max": 60,
        "warnLimit": 40.0,
        "alarmLimit": 48.0,
        "normal": "20 - 40 \u00b0C",
        "alarm": "\u2265 48 \u00b0C",
        "backendZone": "yellow",
        "sparkline": [
          30.1,
          32.4,
          34.8,
          37.0,
          39.2,
          40.8,
          41.5,
          42.0,
          42.4,
          42.6
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Spindle Rear Bearing Temp reached 42.6 \u00b0C, exceeding 40.0 \u00b0C warning threshold.",
          "probableReason": "Air-oil micro-lubrication dosing interval restricted or high ambient spindle nose friction.",
          "manualSolution": "1. Inspect oil-air lubrication unit reservoir level and dosing pressure (2.8 bar nominal).\n2. Verify pulse cycle frequency (1 shot every 8 mins) per Fischer Manual Ch. 4.3.\n3. Check recooler cooling jacket supply lines for thermal balance.",
          "historicalCorrelation": "Led to bearing thermal alert 4 times in the past 6 months (Last: 12-Sep-2026).",
          "sparesRequired": "Fischer Ceramic Ball Bearing Set (P/N: HC-7012-C-P4S), Turcon Variseal Shaft Oil Seal (P/N: TVS-35x50x7), Air-Oil Micro-Lubrication Injector Nozzle (P/N: VOE-02-NOZ)"
        }
      },
      {
        "tag": "BAVIUS_4MTR_SP1_MOTOR_TEMP",
        "name": "Spindle Motor Stator Temperature (PTC)",
        "value": 61.4,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 15,
        "max": 80,
        "warnLimit": 50.0,
        "alarmLimit": 60.0,
        "normal": "20 - 50 \u00b0C",
        "alarm": "\u2265 60 \u00b0C (Trip)",
        "backendZone": "red",
        "sparkline": [
          38.0,
          42.0,
          47.0,
          52.0,
          55.0,
          57.5,
          59.0,
          60.2,
          61.0,
          61.4
        ],
        "analysis": {
          "severity": "Critical",
          "riskyTrend": "Critical thermal overload: Stator Temp climbed to 61.4 \u00b0C, breaching the 60.0 \u00b0C alarm threshold.",
          "probableReason": "Spindle thermal saturation due to recooler heat dissipation deficit. KRA150 chiller filter mat clogged.",
          "manualSolution": "1. Execute controlled spindle stop.\n2. Clean KRA150 chiller air filter mat FAC and remove debris from condenser fins.\n3. Measure PTC resistance (< 3000 \u03a9 across pins 3-4 per Fischer Manual Ch. 7.2).\n4. Allow 30 min cooling dwell and restart under graduated warm-up cycle.",
          "historicalCorrelation": "Corresponds to Active Breakdown Ticket SAP-PM-2026-94812 (Occurred 3 times in last 6 months).",
          "sparesRequired": "Rittal Chiller G4 Air Filter Mat (P/N: SK 3182.100), Fischer PTC M130 Thermistor Sensor (P/N: DIN 44082 M130), Coolant Circulation Pump Mechanical Seal (P/N: KRA-150-MS)"
        }
      },
      {
        "tag": "BAVIUS_4MTR_aaCurr_SP1",
        "name": "Spindle Stator Active Current",
        "value": 18.8,
        "unit": "A",
        "direction": "high",
        "min": 0,
        "max": 35,
        "warnLimit": 16.0,
        "alarmLimit": 24.0,
        "normal": "0 - 16 A",
        "alarm": "\u2265 24 A (Overload)",
        "backendZone": "yellow",
        "sparkline": [
          4.2,
          6.8,
          10.5,
          13.8,
          15.6,
          17.2,
          18.0,
          18.5,
          18.6,
          18.8
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Stator active current drawing 18.8 A, operating above 16.0 A normal cut load boundary.",
          "probableReason": "Increased milling tool engagement friction, workpiece chip re-cutting, or high cutting depth.",
          "manualSolution": "1. Inspect CNC programmed cutting feedrate and spindle load display.\n2. Inspect cutting tool insert flutes for micro-chipping or flank wear.\n3. Verify toolholder HSK-A63 taper seating per Fischer Manual Ch. 5.1.",
          "historicalCorrelation": "Led to spindle load warning 7 times in last 6 months (Last: 18-Sep-2026).",
          "sparesRequired": "HSK-A63 Tool Holder Collet (P/N: OTT-JAKOB 95.600.034.9.2), Fischer Spindle Grounding Brush Kit (P/N: GB-1920-KIT), Solid Carbide End Mill Inserts (P/N: APKT 1003 PDR)"
        }
      },
      {
        "tag": "BAVIUS_4MTR_vaTorque_SP1",
        "name": "Spindle Motor Torque",
        "value": 7.8,
        "unit": "Nm",
        "direction": "high",
        "min": 0,
        "max": 25,
        "warnLimit": 12.0,
        "alarmLimit": 18.0,
        "normal": "0 - 12.0 Nm",
        "alarm": "\u2265 18.0 Nm",
        "backendZone": "green",
        "sparkline": [
          1.5,
          3.2,
          5.1,
          6.4,
          7.1,
          7.5,
          7.6,
          7.7,
          7.8,
          7.8
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_4MTR_SP1_POWER",
        "name": "Spindle Drive Active Power",
        "value": 18.2,
        "unit": "kW",
        "direction": "high",
        "min": 0,
        "max": 45,
        "warnLimit": 30.0,
        "alarmLimit": 38.0,
        "normal": "0 - 30.0 kW",
        "alarm": "\u2265 38.0 kW",
        "backendZone": "green",
        "sparkline": [
          2.0,
          5.8,
          11.2,
          14.8,
          16.5,
          17.6,
          18.0,
          18.1,
          18.2,
          18.2
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_4MTR_VIB_SP1_FRONT",
        "name": "Spindle Nose Vibration FFT RMS",
        "value": 4.85,
        "unit": "mm/s",
        "direction": "high",
        "min": 0,
        "max": 10,
        "warnLimit": 2.5,
        "alarmLimit": 4.5,
        "normal": "0 - 2.5 mm/s",
        "alarm": "\u2265 4.5 mm/s (Alarm 700731)",
        "backendZone": "red",
        "sparkline": [
          1.2,
          1.6,
          2.1,
          2.8,
          3.4,
          4.0,
          4.3,
          4.6,
          4.75,
          4.85
        ],
        "analysis": {
          "severity": "Critical",
          "riskyTrend": "Spindle FFT vibration rose to 4.85 mm/s, breaching ISO 10816 & SiViB alarm limit 4.5 mm/s.",
          "probableReason": "Toolholder unbalance (exceeding G2.5) or incipient outer race bearing defect frequency (BPFO).",
          "manualSolution": "1. Stop cutting cycle and retract spindle to tool-change position.\n2. Inspect HSK-A63 toolholder collar and spindle receiver taper for fretting corrosion.\n3. Measure dynamic runout with dial gauge (< 0.003 mm per Fischer Manual Ch. 7.3).\n4. Inspect SiViB Record 31 FFT diagnostic spectrum for defect frequencies.",
          "historicalCorrelation": "Led to emergency stop 2 times in last 6 months (Last: 05-Sep-2026).",
          "sparesRequired": "Fischer Hybrid Ceramic Front Duplex Bearing Pair (P/N: HC-7014-C-P4S-DUL), SiViB Accelerometer Sensor Cable M12 (P/N: 31-CAB-05M), Precision Balancing Ring Kit (P/N: BR-63-A)"
        }
      },
      {
        "tag": "BAVIUS_4MTR_TOOL_CLAMP_FORCE",
        "name": "Tool Clamping Pull-in Force (Ott-Jakob)",
        "value": 14.2,
        "unit": "kN",
        "direction": "low",
        "min": 0,
        "max": 25,
        "warnLimit": 18.0,
        "alarmLimit": 15.0,
        "normal": "18.0 - 22.0 kN",
        "alarm": "< 15.0 kN (Stop)",
        "backendZone": "red",
        "sparkline": [
          18.2,
          17.8,
          17.1,
          16.4,
          15.8,
          15.2,
          14.8,
          14.5,
          14.3,
          14.2
        ],
        "analysis": {
          "severity": "Critical",
          "riskyTrend": "Tool pull-in clamping force dropped to 14.2 kN, below the 15.0 kN critical safe threshold.",
          "probableReason": "Ott-Jakob drawbar Belleville disc spring stack fatigue or collet gripper claw contamination.",
          "manualSolution": "1. Inhibit spindle start immediately to avoid toolholder ejection risk.\n2. Calibrate clamping force with Ott-Jakob POWER-CHECK wireless gauge.\n3. Inspect drawbar Belleville spring washers for cracks per Tool Manual 146598 Ch. 3.2.\n4. Clean and lubricate HSK gripper segments with Kl\u00fcber paste.",
          "historicalCorrelation": "Precedent recorded 5 times across machines in last 6 months (Last: 22-Aug-2026).",
          "sparesRequired": "Belleville Disc Spring Stack 18 kN Pack (P/N: Bavius 146598-BSS), HSK-A63 4-Segment Clamping Gripper (P/N: OTT-JAKOB 95.600.034), Hydraulic Unclamp Piston NBR Seal Kit (P/N: NBR-90-V42)"
        }
      },
      {
        "tag": "BAVIUS_4MTR_OIL_AIR_LUBE_P",
        "name": "Spindle Oil-Air Lubrication Dosing Pressure",
        "value": 2.8,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 6,
        "warnLimit": 2.5,
        "alarmLimit": 1.8,
        "normal": "2.5 - 4.5 bar",
        "alarm": "< 1.8 bar",
        "backendZone": "green",
        "sparkline": [
          2.9,
          2.8,
          2.9,
          2.8,
          2.8,
          2.9,
          2.8,
          2.8,
          2.8,
          2.8
        ],
        "analysis": null
      }
    ]
  },
  {
    "groupId": "chiller-cooling",
    "groupName": "Cooling & Spindle Chiller Recooler System",
    "description": "Rittal KRA150 closed-loop recooler circuit monitoring spindle stator jacket and bearing heat exchanger per KRA150 Chiller Manual",
    "parameters": [
      {
        "tag": "BAVIUS_CHILLER_SUPPLY_TEMP",
        "name": "Chiller Recooler Supply Temperature",
        "value": 25.6,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 10,
        "max": 35,
        "warnLimit": 24.0,
        "alarmLimit": 28.0,
        "normal": "18.0 - 24.0 \u00b0C",
        "alarm": "\u2265 28.0 \u00b0C",
        "backendZone": "yellow",
        "sparkline": [
          20.8,
          21.6,
          22.5,
          23.4,
          24.1,
          24.8,
          25.2,
          25.4,
          25.5,
          25.6
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Chiller supply coolant temp rose to 25.6 \u00b0C, exceeding 24.0 \u00b0C setpoint band.",
          "probableReason": "Air-cooled condenser fin clogging reducing heat transfer efficiency to shop environment.",
          "manualSolution": "1. Remove KRA150 front grille and vacuum clean condenser coil fins.\n2. Wash G4 filter mat FAC with mild detergent and dry thoroughly.\n3. Verify chiller fan rotation and ambient inlet temperature per Rittal Manual Ch. 4.3.",
          "historicalCorrelation": "Associated with Spindle Over-Temperature breakdown mode (17 incidents in last 6 months).",
          "sparesRequired": "Rittal Filter Mat G4 (P/N: SK 3182.100), Danfoss Refrigerant Expansion Valve R134a (P/N: T2/TE2-068Z3206), Chiller Digital Thermostat Probe Pt100 (P/N: PT100-3M-SS)"
        }
      },
      {
        "tag": "BAVIUS_CHILLER_RETURN_TEMP",
        "name": "Chiller Recooler Return Temperature",
        "value": 28.4,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 10,
        "max": 40,
        "warnLimit": 30.0,
        "alarmLimit": 34.0,
        "normal": "20.0 - 30.0 \u00b0C",
        "alarm": "\u2265 34.0 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          24.0,
          24.8,
          25.6,
          26.5,
          27.2,
          27.8,
          28.1,
          28.3,
          28.4,
          28.4
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CHILLER_FLOW_RATE",
        "name": "Spindle Recooler Flow Rate",
        "value": 9.8,
        "unit": "L/min",
        "direction": "low",
        "min": 0,
        "max": 20,
        "warnLimit": 8.5,
        "alarmLimit": 6.0,
        "normal": "8.5 - 15.0 L/min",
        "alarm": "< 6.0 L/min (Alarm 700501)",
        "backendZone": "green",
        "sparkline": [
          10.4,
          10.2,
          10.0,
          9.9,
          9.8,
          9.9,
          9.8,
          9.8,
          9.8,
          9.8
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CHILLER_REFRIG_HP",
        "name": "Chiller Refrigerant High Pressure (PA Switch)",
        "value": 18.2,
        "unit": "bar",
        "direction": "high",
        "min": 0,
        "max": 30,
        "warnLimit": 21.0,
        "alarmLimit": 24.0,
        "normal": "12.0 - 20.0 bar",
        "alarm": "\u2265 24.0 bar (Trip)",
        "backendZone": "green",
        "sparkline": [
          14.5,
          15.2,
          16.0,
          16.8,
          17.4,
          17.8,
          18.0,
          18.1,
          18.2,
          18.2
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CHILLER_LEVEL_PERCENT",
        "name": "Chiller Coolant Tank Level",
        "value": 84.0,
        "unit": "%",
        "direction": "low",
        "min": 0,
        "max": 100,
        "warnLimit": 60.0,
        "alarmLimit": 40.0,
        "normal": "60 - 100 %",
        "alarm": "< 40 %",
        "backendZone": "green",
        "sparkline": [
          85,
          85,
          84,
          84,
          84,
          84,
          84,
          84,
          84,
          84
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CHILLER_PUMP_P",
        "name": "Chiller Pump Outlet Pressure",
        "value": 3.4,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 6,
        "warnLimit": 2.8,
        "alarmLimit": 2.0,
        "normal": "2.8 - 4.5 bar",
        "alarm": "< 2.0 bar",
        "backendZone": "green",
        "sparkline": [
          3.5,
          3.5,
          3.4,
          3.4,
          3.4,
          3.4,
          3.4,
          3.4,
          3.4,
          3.4
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CHILLER_DELTA_T",
        "name": "Spindle Jacket Thermal Delta T",
        "value": 2.8,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 0,
        "max": 10,
        "warnLimit": 5.0,
        "alarmLimit": 7.0,
        "normal": "1.0 - 5.0 \u00b0C",
        "alarm": "\u2265 7.0 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          1.8,
          2.0,
          2.3,
          2.5,
          2.7,
          2.8,
          2.8,
          2.8,
          2.8,
          2.8
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CHILLER_AMBIENT_TEMP",
        "name": "Recooler Ambient Air Intake Temp",
        "value": 27.2,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 10,
        "max": 45,
        "warnLimit": 35.0,
        "alarmLimit": 40.0,
        "normal": "18.0 - 35.0 \u00b0C",
        "alarm": "\u2265 40.0 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          25.0,
          25.4,
          25.8,
          26.2,
          26.6,
          26.9,
          27.0,
          27.1,
          27.2,
          27.2
        ],
        "analysis": null
      }
    ]
  },
  {
    "groupId": "pneumatics-air",
    "groupName": "Pneumatics & Central Compressed Air Network",
    "description": "Central plant air supply, SMC filter regulator lubricator (FRL) unit, sealing air purges per HBZ CC Operating Instructions Section 2.3",
    "parameters": [
      {
        "tag": "BAVIUS_PNEUMATIC_SUPPLY_P1",
        "name": "Compressed Air Supply Pressure",
        "value": 5.7,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 10,
        "warnLimit": 6.0,
        "alarmLimit": 5.2,
        "normal": "6.0 - 8.0 bar",
        "alarm": "< 5.2 bar (Alarm 700121)",
        "backendZone": "yellow",
        "sparkline": [
          6.6,
          6.4,
          6.2,
          6.0,
          5.9,
          5.8,
          5.7,
          5.8,
          5.7,
          5.7
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Inlet air pressure declined to 5.7 bar, below nominal 6.0 bar line pressure.",
          "probableReason": "Central compressor loading cycle drop or minor pressure drop across drag-chain polyurethane lines.",
          "manualSolution": "1. Inspect central shop air header pressure gauge.\n2. Check water separator auto-drain valve on SMC FRL service unit.\n3. Inspect flexible pneumatic hoses in Z-axis energy chain per HBZ CC Manual Section 2.3.",
          "historicalCorrelation": "Led to air supply pressure alarm 12 times in last 6 months (Top 3 breakdown cause).",
          "sparesRequired": "FESTO MS6-LFM 0.01 \u00b5m Microfilter Cartridge (P/N: 532789), FESTO VPPM Proportional Pressure Regulator (P/N: VPPM-6L-L-1), Main FRL Drain Valve Auto-Expeller (P/N: DNV-04-AUTO)"
        }
      },
      {
        "tag": "BAVIUS_PNEUMATIC_SPINDLE_SEAL_P",
        "name": "Spindle Sealing Air Purge Pressure",
        "value": 1.8,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 4,
        "warnLimit": 1.4,
        "alarmLimit": 1.0,
        "normal": "1.5 - 2.5 bar",
        "alarm": "< 1.0 bar (Alarm 700216)",
        "backendZone": "green",
        "sparkline": [
          1.9,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PNEUMATIC_SCALE_PURGE_P",
        "name": "Linear Scale Sealing Air Pressure",
        "value": 1.5,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 3,
        "warnLimit": 1.1,
        "alarmLimit": 0.8,
        "normal": "1.2 - 2.0 bar",
        "alarm": "< 0.8 bar",
        "backendZone": "green",
        "sparkline": [
          1.6,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5,
          1.5
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PNEUMATIC_DEW_POINT",
        "name": "Pneumatic Filter Regulator Dew Point",
        "value": 3.2,
        "unit": "\u00b0C",
        "direction": "high",
        "min": -20,
        "max": 20,
        "warnLimit": 7.0,
        "alarmLimit": 12.0,
        "normal": "-10 - 7 \u00b0C",
        "alarm": "\u2265 12 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          2.8,
          2.9,
          3.0,
          3.1,
          3.1,
          3.2,
          3.2,
          3.2,
          3.2,
          3.2
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PNEUMATIC_TAPER_BLOW_FLOW",
        "name": "Tool Taper Air Blow Purge Flow",
        "value": 145,
        "unit": "L/min",
        "direction": "low",
        "min": 0,
        "max": 250,
        "warnLimit": 110,
        "alarmLimit": 80,
        "normal": "110 - 200 L/min",
        "alarm": "< 80 L/min",
        "backendZone": "green",
        "sparkline": [
          150,
          148,
          146,
          145,
          145,
          145,
          145,
          145,
          145,
          145
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PNEUMATIC_DOOR_ACT_P",
        "name": "Shutter Door Actuator Air Pressure",
        "value": 5.6,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 10,
        "warnLimit": 4.8,
        "alarmLimit": 4.0,
        "normal": "5.0 - 7.0 bar",
        "alarm": "< 4.0 bar",
        "backendZone": "green",
        "sparkline": [
          5.8,
          5.7,
          5.6,
          5.6,
          5.6,
          5.6,
          5.6,
          5.6,
          5.6,
          5.6
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PNEUMATIC_ATC_CLAW_P",
        "name": "ATC Claw Tool Gripper Cylinder Pressure",
        "value": 5.5,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 10,
        "warnLimit": 4.8,
        "alarmLimit": 4.0,
        "normal": "5.0 - 7.0 bar",
        "alarm": "< 4.0 bar",
        "backendZone": "green",
        "sparkline": [
          5.6,
          5.5,
          5.5,
          5.5,
          5.5,
          5.5,
          5.5,
          5.5,
          5.5,
          5.5
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PNEUMATIC_MAIN_AIR_FLOW",
        "name": "Main Air Supply Mass Flow Rate",
        "value": 420,
        "unit": "Nm\u00b3/h",
        "direction": "high",
        "min": 0,
        "max": 800,
        "warnLimit": 600,
        "alarmLimit": 720,
        "normal": "150 - 550 Nm\u00b3/h",
        "alarm": "\u2265 720 Nm\u00b3/h",
        "backendZone": "green",
        "sparkline": [
          380,
          395,
          410,
          415,
          420,
          420,
          418,
          422,
          419,
          420
        ],
        "analysis": null
      }
    ]
  },
  {
    "groupId": "hydraulics-workholding",
    "groupName": "Hydraulics & Pallet Workholding System",
    "description": "Central hydraulic power pack, pallet unclamp cylinders, counter-balance circuit per Hydraulic Schematic HS-002-K617-2",
    "parameters": [
      {
        "tag": "BAVIUS_HYD_MAIN_PRESSURE",
        "name": "Main Hydraulic System Pressure",
        "value": 135.0,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 200,
        "warnLimit": 120.0,
        "alarmLimit": 100.0,
        "normal": "125 - 150 bar",
        "alarm": "< 100 bar",
        "backendZone": "green",
        "sparkline": [
          136,
          135,
          135,
          136,
          135,
          135,
          135,
          135,
          135,
          135
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_HYD_PALLET_CLAMP_P",
        "name": "Hydraulic Clamping Line Pressure (Pallet Table)",
        "value": 122.0,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 180,
        "warnLimit": 110.0,
        "alarmLimit": 90.0,
        "normal": "115 - 140 bar",
        "alarm": "< 90 bar",
        "backendZone": "green",
        "sparkline": [
          124,
          123,
          122,
          122,
          122,
          122,
          122,
          122,
          122,
          122
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_HYD_RETURN_FILTER_DP",
        "name": "Hydraulic Return Filter Differential Pressure",
        "value": 2.1,
        "unit": "bar",
        "direction": "high",
        "min": 0,
        "max": 5.0,
        "warnLimit": 1.8,
        "alarmLimit": 2.5,
        "normal": "0 - 1.8 bar",
        "alarm": "\u2265 2.5 bar",
        "backendZone": "yellow",
        "sparkline": [
          1.4,
          1.5,
          1.7,
          1.8,
          1.9,
          2.0,
          2.0,
          2.1,
          2.1,
          2.1
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Return filter differential pressure reached 2.1 bar, indicating filter element particle loading.",
          "probableReason": "Hydraulic oil micro-particulate varnish buildup in return circuit.",
          "manualSolution": "1. Prepare 6-micron replacement filter cartridge.\n2. Relieve system hydraulic pressure via bleed valve 2V1.\n3. Replace filter element and check clogging indicator per Hydraulic Manual Ch. 4.",
          "historicalCorrelation": "Correlates to Pallet Clamp Lockup failure mode (19 incidents in last 6 months).",
          "sparesRequired": "Hydac Glass Fiber Filter Element 10 \u00b5m (P/N: 0160 D 010 BN4HC), Differential Pressure Optical/Electrical Clogging Indicator (P/N: VD 5 D.0 /-2M), Hydraulic Reservoir NBR Gasket Kit (P/N: NBR-RES-75)"
        }
      },
      {
        "tag": "BAVIUS_HYD_TANK_TEMP",
        "name": "Hydraulic Reservoir Fluid Temperature",
        "value": 41.5,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 10,
        "max": 80,
        "warnLimit": 52.0,
        "alarmLimit": 62.0,
        "normal": "30 - 50 \u00b0C",
        "alarm": "\u2265 62 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          35.0,
          36.5,
          38.0,
          39.5,
          40.2,
          40.8,
          41.1,
          41.3,
          41.4,
          41.5
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_HYD_ACCUM_N2_P",
        "name": "Hydraulic Accumulator Nitrogen Pre-Charge",
        "value": 68.0,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 120,
        "warnLimit": 62.0,
        "alarmLimit": 55.0,
        "normal": "65 - 80 bar",
        "alarm": "< 55 bar",
        "backendZone": "green",
        "sparkline": [
          70,
          69,
          69,
          68,
          68,
          68,
          68,
          68,
          68,
          68
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_HYD_Z_COUNTERBALANCE_P",
        "name": "Z-Axis Counterbalance Hydraulic Pressure",
        "value": 88.0,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 140,
        "warnLimit": 78.0,
        "alarmLimit": 68.0,
        "normal": "82 - 100 bar",
        "alarm": "< 68 bar",
        "backendZone": "green",
        "sparkline": [
          89,
          88,
          88,
          88,
          88,
          88,
          88,
          88,
          88,
          88
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_HYD_TANK_LEVEL_PERCENT",
        "name": "Hydraulic Oil Tank Level",
        "value": 78.0,
        "unit": "%",
        "direction": "low",
        "min": 0,
        "max": 100,
        "warnLimit": 50.0,
        "alarmLimit": 30.0,
        "normal": "50 - 100 %",
        "alarm": "< 30 %",
        "backendZone": "green",
        "sparkline": [
          80,
          80,
          79,
          79,
          79,
          78,
          78,
          78,
          78,
          78
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_HYD_PALLET_UNCLAMP_TIME",
        "name": "Pallet Unclamp Release Confirmation Time",
        "value": 1.15,
        "unit": "sec",
        "direction": "high",
        "min": 0,
        "max": 4.0,
        "warnLimit": 2.0,
        "alarmLimit": 2.8,
        "normal": "0.8 - 1.8 sec",
        "alarm": "\u2265 2.8 sec",
        "backendZone": "green",
        "sparkline": [
          1.1,
          1.12,
          1.14,
          1.15,
          1.15,
          1.15,
          1.15,
          1.15,
          1.15,
          1.15
        ],
        "analysis": null
      }
    ]
  },
  {
    "groupId": "motion-drives",
    "groupName": "5-Axis Motion Drives & Gantry Kinematics",
    "description": "Siemens S120 servo drives, tandem gantry drives (X11/X12), vertical column (Y11), and rotary axes per Drive Diagram Antriebsschema",
    "parameters": [
      {
        "tag": "BAVIUS_DRV_Y11_MOTOR_TEMP",
        "name": "Axis Y11 Motor Temp (Vertical Column)",
        "value": 58.0,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 15,
        "max": 90,
        "warnLimit": 55.0,
        "alarmLimit": 70.0,
        "normal": "20 - 55 \u00b0C",
        "alarm": "\u2265 70 \u00b0C",
        "backendZone": "yellow",
        "sparkline": [
          38.0,
          42.5,
          47.0,
          51.5,
          54.0,
          56.0,
          57.0,
          57.6,
          57.8,
          58.0
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Axis Y11 column drive motor temp reached 58.0 \u00b0C, crossing 55.0 \u00b0C warning boundary.",
          "probableReason": "Hydraulic holding brake partial drag or slideway counter-balance pressure mismatch.",
          "manualSolution": "1. Verify hydraulic brake release solenoid valve 1S1 operation.\n2. Inspect guideway lubrication oil metering valves for vertical ways.\n3. Check Z-column counterbalance accumulator pressure per HBZ CC Manual Ch. 3.4.",
          "historicalCorrelation": "Led to drive torque trip 11 times in past 6 months (Top 5 breakdown cause).",
          "sparesRequired": "Siemens 1FT7 Servomotor External Cooling Fan Blower (P/N: 1FT7-FAN-230V), Drive Motor Thermal Overload Sensor KTY84-130 (P/N: KTY84-130), THK Roller Guide Wiper Seal Kit (P/N: SRG45-WIP)"
        }
      },
      {
        "tag": "BAVIUS_DRV_Y11_CURRENT",
        "name": "Axis Y11 Servo Current",
        "value": 21.4,
        "unit": "A",
        "direction": "high",
        "min": 0,
        "max": 40,
        "warnLimit": 18.0,
        "alarmLimit": 28.0,
        "normal": "0 - 18 A",
        "alarm": "\u2265 28 A",
        "backendZone": "yellow",
        "sparkline": [
          8.5,
          11.2,
          14.8,
          17.5,
          19.2,
          20.4,
          20.9,
          21.2,
          21.3,
          21.4
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Elevated continuous servo current 21.4 A during rapid column traverse moves.",
          "probableReason": "Mechanical resistance along vertical guideways or ballscrew pre-load drag.",
          "manualSolution": "1. Inspect linear roller guideway shoes for lubrication starvation.\n2. Perform CNC automated brake test cycle.\n3. Verify ballscrew drive belt tension per Antriebsschema HBZ CC 200/100.",
          "historicalCorrelation": "Precursor to Axis Drive Drag breakdown mode.",
          "sparesRequired": "THK Precision Ball Screw Wiper Scraper (P/N: BSW-4010-RR), Kl\u00fcberplex BEM 34-132 Synthetic Grease Cartridge (P/N: KLUB-34-132-400G), Flexible Cable Carrier Chain Link (P/N: IGUS 3500.100)"
        }
      },
      {
        "tag": "BAVIUS_DRV_Y11_TORQUE",
        "name": "Axis Y11 Motor Torque (Brake Load)",
        "value": 34.5,
        "unit": "Nm",
        "direction": "high",
        "min": -60,
        "max": 60,
        "warnLimit": 28.0,
        "alarmLimit": 42.0,
        "normal": "-25 - +25 Nm",
        "alarm": "\u2265 42 Nm",
        "backendZone": "yellow",
        "sparkline": [
          12.0,
          16.5,
          22.0,
          26.8,
          30.2,
          32.5,
          33.6,
          34.1,
          34.4,
          34.5
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Motor torque demand elevated at 34.5 Nm under nominal cutting conditions.",
          "probableReason": "Vertical axis counter-balance pressure dip causing motor to carry extra gravity load.",
          "manualSolution": "1. Measure counterbalance cylinder pressure (should be 88 bar).\n2. Top up nitrogen accumulator if pressure < 78 bar.\n3. Inspect guide rail wiper scrapers for aluminum chip ingress.",
          "historicalCorrelation": "Corresponds to 11 previous drive overload events.",
          "sparesRequired": "Vogel Central Lubrication Metering Valve Unit (P/N: 341-100-000), Linear Encoder Optical Scale Scanning Head (P/N: Heidenhain LC 195F), Gantry Crossbeam Linear Guide Bearing Block (P/N: THK SRG45LR)"
        }
      },
      {
        "tag": "BAVIUS_DRV_X11_FOLLOW_ERROR",
        "name": "Axis X11 Master Gantry Position Lag",
        "value": 0.008,
        "unit": "mm",
        "direction": "high",
        "min": 0,
        "max": 0.05,
        "warnLimit": 0.025,
        "alarmLimit": 0.038,
        "normal": "0 - 0.020 mm",
        "alarm": "\u2265 0.038 mm",
        "backendZone": "green",
        "sparkline": [
          0.005,
          0.006,
          0.007,
          0.008,
          0.008,
          0.008,
          0.008,
          0.008,
          0.008,
          0.008
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_DRV_X12_SYNC_DEVIATION",
        "name": "Axis X12 Slave Gantry Tandem Sync Deviation",
        "value": 0.004,
        "unit": "mm",
        "direction": "high",
        "min": 0,
        "max": 0.03,
        "warnLimit": 0.015,
        "alarmLimit": 0.022,
        "normal": "0 - 0.012 mm",
        "alarm": "\u2265 0.022 mm",
        "backendZone": "green",
        "sparkline": [
          0.003,
          0.003,
          0.004,
          0.004,
          0.004,
          0.004,
          0.004,
          0.004,
          0.004,
          0.004
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_DRV_Z11_MOTOR_TEMP",
        "name": "Axis Z11 Ram Extension Motor Temperature",
        "value": 44.2,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 15,
        "max": 90,
        "warnLimit": 55.0,
        "alarmLimit": 70.0,
        "normal": "20 - 55 \u00b0C",
        "alarm": "\u2265 70 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          32,
          35,
          38,
          41,
          43,
          44,
          44,
          44,
          44,
          44.2
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_DRV_A11_CURRENT",
        "name": "Axis A11 Swivel Trunnion Motor Current",
        "value": 8.4,
        "unit": "A",
        "direction": "high",
        "min": 0,
        "max": 30,
        "warnLimit": 15.0,
        "alarmLimit": 22.0,
        "normal": "0 - 15 A",
        "alarm": "\u2265 22 A",
        "backendZone": "green",
        "sparkline": [
          4.0,
          5.5,
          6.8,
          7.8,
          8.1,
          8.3,
          8.4,
          8.4,
          8.4,
          8.4
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_DRV_C11_MOTOR_TEMP",
        "name": "Axis C11 Direct-Drive Torque Motor Temperature",
        "value": 38.6,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 15,
        "max": 75,
        "warnLimit": 48.0,
        "alarmLimit": 58.0,
        "normal": "20 - 45 \u00b0C",
        "alarm": "\u2265 58 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          28,
          30,
          33,
          35,
          37,
          38,
          38.2,
          38.4,
          38.5,
          38.6
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_SCALE_X11_SIGNAL_AMP",
        "name": "Heidenhain Linear Scale X11 Signal Amplitude",
        "value": 1.02,
        "unit": "Vss",
        "direction": "low",
        "min": 0,
        "max": 1.5,
        "warnLimit": 0.85,
        "alarmLimit": 0.65,
        "normal": "0.90 - 1.20 Vss",
        "alarm": "< 0.65 Vss",
        "backendZone": "green",
        "sparkline": [
          1.05,
          1.04,
          1.03,
          1.03,
          1.02,
          1.02,
          1.02,
          1.02,
          1.02,
          1.02
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ENCODER_C11_SIGNAL_AMP",
        "name": "Heidenhain Angle Encoder C11 Signal Amplitude",
        "value": 0.98,
        "unit": "Vss",
        "direction": "low",
        "min": 0,
        "max": 1.5,
        "warnLimit": 0.82,
        "alarmLimit": 0.6,
        "normal": "0.85 - 1.15 Vss",
        "alarm": "< 0.60 Vss",
        "backendZone": "green",
        "sparkline": [
          1.0,
          0.99,
          0.99,
          0.98,
          0.98,
          0.98,
          0.98,
          0.98,
          0.98,
          0.98
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_LUBE_WAY_PRESSURE",
        "name": "Slideway Progressive Way Lube Pressure",
        "value": 28.5,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 50,
        "warnLimit": 22.0,
        "alarmLimit": 16.0,
        "normal": "24 - 35 bar",
        "alarm": "< 16 bar",
        "backendZone": "green",
        "sparkline": [
          29,
          29,
          28.5,
          28.5,
          28.5,
          28.5,
          28.5,
          28.5,
          28.5,
          28.5
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_LUBE_CYCLE_TIME",
        "name": "Progressive Distributor Lube Cycle Confirmation Time",
        "value": 12.0,
        "unit": "sec",
        "direction": "high",
        "min": 0,
        "max": 30,
        "warnLimit": 18.0,
        "alarmLimit": 24.0,
        "normal": "8 - 16 sec",
        "alarm": "\u2265 24 sec",
        "backendZone": "green",
        "sparkline": [
          11,
          11,
          12,
          12,
          12,
          12,
          12,
          12,
          12,
          12
        ],
        "analysis": null
      }
    ]
  },
  {
    "groupId": "tool-changer",
    "groupName": "Automatic Tool Changer (ATC) & Gripper Magazine",
    "description": "Chain tool magazine, shutter doors, pneumatic transfer arm, and proximity sensors per Tool Control Manual 146598",
    "parameters": [
      {
        "tag": "BAVIUS_ATC_CHAIN_MOTOR_CURR",
        "name": "Tool Magazine Chain Drive Motor Current",
        "value": 4.2,
        "unit": "A",
        "direction": "high",
        "min": 0,
        "max": 15,
        "warnLimit": 8.0,
        "alarmLimit": 11.0,
        "normal": "2 - 7 A",
        "alarm": "\u2265 11 A",
        "backendZone": "green",
        "sparkline": [
          3.8,
          4.0,
          4.1,
          4.2,
          4.2,
          4.2,
          4.2,
          4.2,
          4.2,
          4.2
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_DOOR_CYCLE_TIME",
        "name": "ATC Shutter Door Pneumatic Cycle Time",
        "value": 0.88,
        "unit": "sec",
        "direction": "high",
        "min": 0,
        "max": 3.0,
        "warnLimit": 1.5,
        "alarmLimit": 2.2,
        "normal": "0.6 - 1.4 sec",
        "alarm": "\u2265 2.2 sec",
        "backendZone": "green",
        "sparkline": [
          0.85,
          0.86,
          0.87,
          0.88,
          0.88,
          0.88,
          0.88,
          0.88,
          0.88,
          0.88
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_SENSOR_B47_GAP",
        "name": "Tool Clamp Confirmation Proximity Sensor B47 Signal",
        "value": 1.8,
        "unit": "mm",
        "direction": "high",
        "min": 0,
        "max": 5.0,
        "warnLimit": 3.0,
        "alarmLimit": 3.8,
        "normal": "1.2 - 2.6 mm",
        "alarm": "\u2265 3.8 mm",
        "backendZone": "green",
        "sparkline": [
          1.7,
          1.7,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8,
          1.8
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_CHIP_TO_CHIP_TIME",
        "name": "Tool Change Chip-to-Chip Duration",
        "value": 7.2,
        "unit": "sec",
        "direction": "high",
        "min": 0,
        "max": 15.0,
        "warnLimit": 9.5,
        "alarmLimit": 12.0,
        "normal": "5.5 - 8.5 sec",
        "alarm": "\u2265 12.0 sec",
        "backendZone": "green",
        "sparkline": [
          7.0,
          7.1,
          7.1,
          7.2,
          7.2,
          7.2,
          7.2,
          7.2,
          7.2,
          7.2
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_TOOL_LIFE_CYCLES",
        "name": "Total Tool Indexing Operations Count",
        "value": 382,
        "unit": "cycles",
        "direction": "high",
        "min": 0,
        "max": 1000,
        "warnLimit": 750,
        "alarmLimit": 900,
        "normal": "0 - 750 cycles",
        "alarm": "\u2265 900 cycles",
        "backendZone": "green",
        "sparkline": [
          350,
          355,
          362,
          368,
          372,
          376,
          379,
          380,
          381,
          382
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_POCKET_LOCK_GAP",
        "name": "Tool Pocket Mechanical Seat Lock Sensor Gap",
        "value": 0.95,
        "unit": "mm",
        "direction": "high",
        "min": 0,
        "max": 3.0,
        "warnLimit": 1.8,
        "alarmLimit": 2.4,
        "normal": "0.5 - 1.5 mm",
        "alarm": "\u2265 2.4 mm",
        "backendZone": "green",
        "sparkline": [
          0.92,
          0.93,
          0.94,
          0.95,
          0.95,
          0.95,
          0.95,
          0.95,
          0.95,
          0.95
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_TAPER_PURGE_OK",
        "name": "Tool Taper Air Blast Purge Cleanliness Ratio",
        "value": 99.4,
        "unit": "%",
        "direction": "low",
        "min": 0,
        "max": 100,
        "warnLimit": 85.0,
        "alarmLimit": 70.0,
        "normal": "90 - 100 %",
        "alarm": "< 70 %",
        "backendZone": "green",
        "sparkline": [
          100,
          100,
          100,
          99.8,
          99.6,
          99.5,
          99.4,
          99.4,
          99.4,
          99.4
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_ATC_SPRING_CYCLES",
        "name": "Tool Holder Clamping Belleville Spring Cycle Count",
        "value": 18450,
        "unit": "act",
        "direction": "high",
        "min": 0,
        "max": 50000,
        "warnLimit": 35000,
        "alarmLimit": 45000,
        "normal": "0 - 35,000 act",
        "alarm": "\u2265 45,000 act",
        "backendZone": "green",
        "sparkline": [
          18200,
          18250,
          18300,
          18350,
          18380,
          18400,
          18420,
          18440,
          18445,
          18450
        ],
        "analysis": null
      }
    ]
  },
  {
    "groupId": "aux-systems",
    "groupName": "Filtration, Vacuum Clamping & Auxiliary Subsystems",
    "description": "Knoll KF 200 filter fleece, VOC vacuum part clamping station, mist collector per Knoll KF & VOC Manuals",
    "parameters": [
      {
        "tag": "BAVIUS_VACUUM_CLAMP_PRESSURE",
        "name": "Vacuum Workholding Clamping Pressure",
        "value": -560,
        "unit": "mbar",
        "direction": "high",
        "min": -1000,
        "max": 0,
        "warnLimit": -600,
        "alarmLimit": -500,
        "normal": "-800 - -600 mbar",
        "alarm": "\u2265 -500 mbar (Loss of Clamp)",
        "backendZone": "yellow",
        "sparkline": [
          -740,
          -710,
          -680,
          -650,
          -620,
          -595,
          -580,
          -570,
          -565,
          -560
        ],
        "analysis": {
          "severity": "Medium",
          "riskyTrend": "Vacuum hold-down degraded to -560 mbar, crossing warning threshold -600 mbar.",
          "probableReason": "Workpiece sealing foam gasket micro-tears or fluid ingress into vacuum suction cup channels.",
          "manualSolution": "1. Inspect vacuum foam rubber sealing perimeter for cuts or swarf chips.\n2. Open manual drain cock on liquid separator vessel 2V2.\n3. Verify vacuum pump suction filter differential per VOC Manual Ch. 3.",
          "historicalCorrelation": "Led to aerostructure workpiece clamping warning 3 times in last 6 months.",
          "sparesRequired": "VOC-AD-S Vacuum Suction EPDM Rubber Seal Lip 8mm (P/N: VOC-SEAL-8M), Busch Vacuum Pump Exhaust Filter Separator (P/N: 0532 140 157), Vacuum Non-Return Check Valve 1-inch (P/N: VCV-100-NBR)"
        }
      },
      {
        "tag": "BAVIUS_COOLANT_HP_DELIVERY_P",
        "name": "Knoll KF 200 Coolant High-Pressure Delivery",
        "value": 68.5,
        "unit": "bar",
        "direction": "low",
        "min": 0,
        "max": 100,
        "warnLimit": 55.0,
        "alarmLimit": 40.0,
        "normal": "60 - 80 bar",
        "alarm": "< 40 bar",
        "backendZone": "green",
        "sparkline": [
          70,
          69.5,
          69,
          68.8,
          68.6,
          68.5,
          68.5,
          68.5,
          68.5,
          68.5
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_COOLANT_TANK_TEMP",
        "name": "Knoll Clean Tank Emulsion Temperature",
        "value": 23.4,
        "unit": "\u00b0C",
        "direction": "high",
        "min": 10,
        "max": 45,
        "warnLimit": 30.0,
        "alarmLimit": 36.0,
        "normal": "18 - 28 \u00b0C",
        "alarm": "\u2265 36 \u00b0C",
        "backendZone": "green",
        "sparkline": [
          21.5,
          21.8,
          22.2,
          22.6,
          22.9,
          23.1,
          23.2,
          23.3,
          23.4,
          23.4
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_FILTER_FLEECE_ADV_RATE",
        "name": "Knoll Filter Fleece Advance Frequency",
        "value": 2.8,
        "unit": "m/h",
        "direction": "high",
        "min": 0,
        "max": 8.0,
        "warnLimit": 5.0,
        "alarmLimit": 6.5,
        "normal": "1.0 - 4.5 m/h",
        "alarm": "\u2265 6.5 m/h",
        "backendZone": "green",
        "sparkline": [
          2.5,
          2.6,
          2.6,
          2.7,
          2.7,
          2.8,
          2.8,
          2.8,
          2.8,
          2.8
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_AFS_MIST_FILTER_DP",
        "name": "AFS Oil Mist Collector Differential Pressure",
        "value": 420,
        "unit": "Pa",
        "direction": "high",
        "min": 0,
        "max": 1200,
        "warnLimit": 750,
        "alarmLimit": 950,
        "normal": "200 - 650 Pa",
        "alarm": "\u2265 950 Pa",
        "backendZone": "green",
        "sparkline": [
          380,
          390,
          400,
          405,
          410,
          415,
          418,
          420,
          420,
          420
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CNC_FEED_OVERRIDE",
        "name": "CNC Feedrate Override Knob Setting",
        "value": 100.0,
        "unit": "%",
        "direction": "high",
        "min": 0,
        "max": 120,
        "warnLimit": 110.0,
        "alarmLimit": 115.0,
        "normal": "80 - 100 %",
        "alarm": "> 115 %",
        "backendZone": "green",
        "sparkline": [
          100,
          100,
          100,
          100,
          100,
          100,
          100,
          100,
          100,
          100
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_CNC_RAPID_OVERRIDE",
        "name": "Rapid Traverse Override Knob Setting",
        "value": 100.0,
        "unit": "%",
        "direction": "high",
        "min": 0,
        "max": 100,
        "warnLimit": 100.0,
        "alarmLimit": 100.0,
        "normal": "50 - 100 %",
        "alarm": "N/A",
        "backendZone": "green",
        "sparkline": [
          100,
          100,
          100,
          100,
          100,
          100,
          100,
          100,
          100,
          100
        ],
        "analysis": null
      },
      {
        "tag": "BAVIUS_PROBE_BATTERY_PERCENT",
        "name": "Renishaw RMI-Q Radio Probe Battery Level",
        "value": 92.0,
        "unit": "%",
        "direction": "low",
        "min": 0,
        "max": 100,
        "warnLimit": 30.0,
        "alarmLimit": 15.0,
        "normal": "30 - 100 %",
        "alarm": "< 15 %",
        "backendZone": "green",
        "sparkline": [
          95,
          95,
          94,
          94,
          93,
          93,
          93,
          92,
          92,
          92
        ],
        "analysis": null
      }
    ]
  }
];
window.ACTIVE_BREAKDOWNS = [
  {
    "id": "BD-2026-0922-01",
    "machineId": "bavius-01",
    "machineName": "Bavius 4mtr N01-02",
    "plantId": "TASL-NGP",
    "alarmCode": "700810 / 700731 / 700145",
    "alarmTag": "BAVIUS_4MTR_CONSOLIDATED_RED",
    "message": "Consolidated Multi-Alarm: Spindle Motor Temp (61.4\u00b0C), Nose Vibration (4.85 mm/s) & Tool Pull-In Force (14.2 kN)",
    "severity": "Critical",
    "redCount": 3,
    "redParameters": [
      {
        "name": "Spindle Motor Stator Temperature (PTC)",
        "value": "61.4 \u00b0C",
        "limit": "\u2265 60.0 \u00b0C (Trip)",
        "tag": "BAVIUS_4MTR_SP1_MOTOR_TEMP"
      },
      {
        "name": "Spindle Nose Vibration FFT RMS",
        "value": "4.85 mm/s",
        "limit": "\u2265 4.5 mm/s (Alarm)",
        "tag": "BAVIUS_4MTR_VIB_SP1_FRONT"
      },
      {
        "name": "Tool Clamping Pull-in Force",
        "value": "14.2 kN",
        "limit": "< 15.0 kN (Trip)",
        "tag": "BAVIUS_4MTR_TOOL_CLAMP_FORCE"
      }
    ],
    "sparesRequired": "Rittal Chiller G4 Air Filter Mat (P/N: SK 3182.100), Hybrid Ceramic Spindle Bearing Set (P/N: HC-7014-C-P4S), Belleville Disc Spring Stack 18 kN (P/N: Bavius 146598-BSS), HSK-A63 Clamping Collet Set (P/N: 95.600.034)",
    "activeSince": "2026-10-05 12:28:52",
    "durationSeconds": 8042,
    "status": "BREAKDOWN",
    "sapTicketId": "SAP-PM-2026-94812",
    "sapStatus": "DISPATCHED_TO_MECHANICAL",
    "remedy": "1. Controlled spindle stop.\n2. Clean KRA150 chiller filter mat FAC and condenser fins.\n3. Measure PTC resistance (< 3000 \u03a9 across pins 3-4).\n4. Inspect Belleville disc spring stack with Ott-Jakob POWER-CHECK pull-in force gauge (target min 18 kN).\n5. Inspect hybrid ceramic spindle bearings per Fischer Manual Ch. 7.2.",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual Ch. 7.2 & Rittal KRA150 Manual Ch. 4.3 & Tool Control Manual 146598",
    "policy": "1 Ticket Per Asset Policy Active: All 3 red parameters consolidated into single work order. New alarms inhibited until ticket closure or 10-day SLA window (Active: 2h 14m)."
  },
  {
    "id": "BD-2026-1005-02",
    "machineId": "modig-03c",
    "machineName": "Modig HHV3 C",
    "plantId": "TASL-NGP",
    "alarmCode": "700121 / 700216 / 700340",
    "alarmTag": "MODIG_CONSOLIDATED_RED",
    "message": "Consolidated Multi-Alarm: Compressed Air Pressure Drop (< 5.2 bar) & Linear Scale Purge Fault",
    "severity": "High",
    "redCount": 4,
    "redParameters": [
      {
        "name": "Compressed Air Supply Pressure",
        "value": "5.1 bar",
        "limit": "< 5.5 bar (Alarm)",
        "tag": "MODIG_AIR_SUPPLY_P"
      },
      {
        "name": "X-Axis Linear Optical Scale Purge",
        "value": "0.8 bar",
        "limit": "< 1.2 bar (Alarm)",
        "tag": "MODIG_X_SCALE_PURGE"
      },
      {
        "name": "Extrusion Feed Thrust Resistance",
        "value": "38.2 kN",
        "limit": "> 35.0 kN (Alarm)",
        "tag": "MODIG_EXTR_THRUST"
      },
      {
        "name": "Spindle Synchronous Drive Lag",
        "value": "14.8 ms",
        "limit": "> 12.0 ms (Alarm)",
        "tag": "MODIG_SYNC_LAG"
      }
    ],
    "sparesRequired": "FESTO MS6-LFM Microfilter Cartridge (P/N: 532789), Polyurethane 12mm Pneumatic Tube (P/N: PUN-H-12x2-BL), Festo QS Quick Coupling (P/N: QS-12-8), Heidenhain Scanning Unit Optical Seal Kit",
    "activeSince": "2026-10-05 09:58:00",
    "durationSeconds": 17104,
    "status": "BREAKDOWN",
    "sapTicketId": "SAP-PM-2026-94808",
    "sapStatus": "UNDER_INVESTIGATION",
    "remedy": "Inspect pneumatic distribution manifold in energy drag chain. Replace cracked 12mm polyurethane air line. Clean optical scale purge filter bowl.",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3 (Pneumatic Supply & Service Unit), Page 116",
    "policy": "1 Ticket Per Asset Policy Active: All 4 red parameters consolidated into single work order. New alarms inhibited for 10 days."
  }
];
window.EVENT_LOG_STREAM = [
  {
    "eventId": "EV-1000",
    "timestamp": "2026-09-22 09:45:00",
    "identifier": "700121 / 700122",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "AIR PRESSURE  LOW \u2014 Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "status": "ACTIVE",
    "category": "Pneumatic System",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.",
    "fullRemedy": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "reason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "sapTicket": "SAP-PM-2026-8800",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3, Page 116",
    "historyPrecedent": "Occurred 2 times in Modig HHV3 C over last 6 months. Previous Action: Replaced cracked 12mm polyurethane air feed line.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1001",
    "timestamp": "2026-09-20 07:15:29",
    "identifier": "700810 / 700811 / 700500",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "MAIN SPINDLE TEMPERATURE SENSORS HIGH \u2014 Main Spindle Bearing / Stator Over-Temperature",
    "status": "ACTIVE",
    "category": "Spindle System",
    "severity": "Critical",
    "downtime": 0.28,
    "remedySummary": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).",
    "fullRemedy": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "reason": "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped. Sensor telemetry recorded spindle motor temp peaking at 61.0C.",
    "sapTicket": "SAP-PM-2026-8801",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 1008,
    "downtimeDurationStr": "00h 16m 48s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1002",
    "timestamp": "2026-09-19 15:30:00",
    "identifier": "700112 / 700531 / 700109",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "AXIS C11; Malfunction axis locking \u2014 Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).",
    "fullRemedy": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "reason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "sapTicket": "SAP-PM-2026-8802",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1003",
    "timestamp": "2026-09-16 14:12:49",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "DRIVE FAULT ISSUE.. \u2014 Machine Subsystem Interruption: DRIVE FAULT ISSUE..",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 0.3,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8803",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 1080,
    "downtimeDurationStr": "00h 18m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1004",
    "timestamp": "2026-09-11 08:53:44",
    "identifier": "700503 / 700703",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "cooling device coolant level low \u2014 Recooler Tank Liquid Level Below Minimum Limit",
    "status": "CLEARED",
    "category": "Cooling & Recooler",
    "severity": "Medium",
    "downtime": 1.12,
    "remedySummary": "1. Inspect cooling hoses, fittings, and spindle rotary union for external leaks.",
    "fullRemedy": "1. Inspect cooling hoses, fittings, and spindle rotary union for external leaks.\n2. Top up reservoir with approved distilled water/antifreeze blend to upper sight glass mark.\n3. Bleed air from the pump using air bleed valve (JO); verify alarm resets automatically.",
    "reason": "Chiller tank liquid level switch (LE/AQ) tripped due to fluid evaporation or minor coupling leakage in the spindle closed cooling circuit.",
    "sapTicket": "SAP-PM-2026-8804",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 4032,
    "downtimeDurationStr": "01h 07m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1005",
    "timestamp": "2026-09-08 17:07:44",
    "identifier": "700121 / 700122",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "AIR PRESSURE LOW. \u2014 Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "status": "CLEARED",
    "category": "Pneumatic System",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.",
    "fullRemedy": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "reason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "sapTicket": "SAP-PM-2026-8805",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3, Page 116",
    "historyPrecedent": "Occurred 2 times in Modig HHV3 C over last 6 months. Previous Action: Replaced cracked 12mm polyurethane air feed line.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1006",
    "timestamp": "2026-09-08 00:17:20",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "PALLET CHANGE ISSUE \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.71,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8806",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 2556,
    "downtimeDurationStr": "00h 42m 36s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1007",
    "timestamp": "2026-09-07 15:05:11",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Pallet changing Issue \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 2.49,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8807",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 8964,
    "downtimeDurationStr": "02h 29m 24s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1008",
    "timestamp": "2026-09-07 08:13:55",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "PALLET CANGING ISSUE \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.0,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8808",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1009",
    "timestamp": "2026-09-06 14:35:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Pallet changing issue. \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.42,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8809",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 1512,
    "downtimeDurationStr": "00h 25m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1010",
    "timestamp": "2026-09-05 02:40:00",
    "identifier": "700114 / TM11",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "AXIS REPLACEMENT:AXIS IS PLC AXIS TM11 \u2014 Tool Magazine Rotary Axis TM11 Positioning Malfunction",
    "status": "CLEARED",
    "category": "Tool Changer (ATC) & Clamping",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Inspect tool magazine chain tension, drive sprocket, and pockets for foreign debris or tilted toolholder.",
    "fullRemedy": "1. Inspect tool magazine chain tension, drive sprocket, and pockets for foreign debris or tilted toolholder.\n2. Check TM11 servo motor thermal trip and power cable connection.\n3. Re-reference TM11 axis in JOG mode and execute test indexing for pockets 1 through 60.",
    "reason": "Tool magazine servo chain drive TM11 positioning lag, mechanical jamming from foreign object, or encoder communication glitch during pocket indexing.",
    "sapTicket": "SAP-PM-2026-8810",
    "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2, Pages 28-33",
    "historyPrecedent": "Occurred 2 times in Breton K60 over last 6 months. Previous Action: Cleaned sensor B47 and re-torqued clamping claw.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1011",
    "timestamp": "2026-08-30 11:04:45",
    "identifier": "700126 / 700904",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "TCH: RUNTIME ERROR MAGAZINE FLAP CLOSED \u2014 ATC Tool Magazine Flap Cover / Door Open Fault",
    "status": "CLEARED",
    "category": "Tool Changer (ATC) & Clamping",
    "severity": "Medium",
    "downtime": 2.42,
    "remedySummary": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.",
    "fullRemedy": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "reason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "sapTicket": "SAP-PM-2026-8811",
    "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2, Pages 28-33",
    "historyPrecedent": "Occurred 2 times in Breton K60 over last 6 months. Previous Action: Cleaned sensor B47 and re-torqued clamping claw.",
    "downtimeSeconds": 8712,
    "downtimeDurationStr": "02h 25m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1012",
    "timestamp": "2026-08-24 12:58:41",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "AIR PRESURES DROP ISSUE \u2014 Machine Subsystem Interruption: AIR PRESURES DROP ISSUE",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 1.0,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8812",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 3600,
    "downtimeDurationStr": "01h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1013",
    "timestamp": "2026-08-21 10:00:00",
    "identifier": "700121 / 700122",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "air pressure drop issue \u2014 Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "status": "CLEARED",
    "category": "Pneumatic System",
    "severity": "Medium",
    "downtime": 2.5,
    "remedySummary": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.",
    "fullRemedy": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "reason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "sapTicket": "SAP-PM-2026-8813",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3, Page 116",
    "historyPrecedent": "Occurred 2 times in Modig HHV3 C over last 6 months. Previous Action: Replaced cracked 12mm polyurethane air feed line.",
    "downtimeSeconds": 9000,
    "downtimeDurationStr": "02h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1014",
    "timestamp": "2026-08-19 04:30:00",
    "identifier": "701338 / 701342",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "SOIL TANK LEVEL FULL \u2014 Coolant Soil Tank High Level / Sludge Overflow",
    "status": "CLEARED",
    "category": "Coolant & Filtration",
    "severity": "Medium",
    "downtime": 0.75,
    "remedySummary": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.",
    "fullRemedy": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "reason": "Knoll KF 200 compact filter soil tank level reached high alarm float switch due to high aluminum chip extraction volume and delayed filter fleece indexing.",
    "sapTicket": "SAP-PM-2026-8814",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 2700,
    "downtimeDurationStr": "00h 45m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1015",
    "timestamp": "2026-08-18 08:30:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Pallet Changing issue. \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8815",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1016",
    "timestamp": "2026-08-17 20:00:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "pallet changing issue \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 1.5,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8816",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 5400,
    "downtimeDurationStr": "01h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1017",
    "timestamp": "2026-08-16 14:03:00",
    "identifier": "700425 / Siemens NCU",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Cntrol panel automatic blinking \u2014 CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "status": "CLEARED",
    "category": "CNC Controller & Panel",
    "severity": "Medium",
    "downtime": 0.62,
    "remedySummary": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.",
    "fullRemedy": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "reason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "sapTicket": "SAP-PM-2026-8817",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 2232,
    "downtimeDurationStr": "00h 37m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1018",
    "timestamp": "2026-08-12 12:20:00",
    "identifier": "700123 / 700120",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Main spindle emergency stop \u2014 Main Spindle Emergency Stop Interruption",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "High",
    "downtime": 1.33,
    "remedySummary": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.",
    "fullRemedy": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "reason": "Safety Integrated circuit or process limit trip (excessive drive torque spike, enclosure door interlock switch chatter, or tool monitoring collision sensor).",
    "sapTicket": "SAP-PM-2026-8818",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 4788,
    "downtimeDurationStr": "01h 19m 48s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1019",
    "timestamp": "2026-08-08 10:00:00",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "c axis drive fault issue \u2014 Machine Subsystem Interruption: c axis drive fault issue",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 2.0,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8819",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 7200,
    "downtimeDurationStr": "02h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1020",
    "timestamp": "2026-08-08 02:10:00",
    "identifier": "Safety Integrated Stop A/B",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Axis A & B stop and triggered \u2014 Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "High",
    "downtime": 0.5,
    "remedySummary": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.",
    "fullRemedy": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "reason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "sapTicket": "SAP-PM-2026-8820",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1021",
    "timestamp": "2026-08-06 16:00:00",
    "identifier": "700425 / Siemens NCU",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "all control panel light blinking \u2014 CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "status": "CLEARED",
    "category": "CNC Controller & Panel",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.",
    "fullRemedy": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "reason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "sapTicket": "SAP-PM-2026-8821",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1022",
    "timestamp": "2026-08-02 04:00:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Pallete changing issue \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.83,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8822",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 2988,
    "downtimeDurationStr": "00h 49m 48s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1023",
    "timestamp": "2026-07-28 18:50:20",
    "identifier": "Safety Integrated Stop A/B",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Least one axisis not safely referenced \u2014 Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "High",
    "downtime": 0.0,
    "remedySummary": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.",
    "fullRemedy": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "reason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "sapTicket": "SAP-PM-2026-8823",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1024",
    "timestamp": "2026-07-28 17:40:40",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Least one axis is not safety referenced. \u2014 Machine Subsystem Interruption: Least one axis is not safety referenced.",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 0.0,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8824",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1025",
    "timestamp": "2026-07-25 16:26:20",
    "identifier": "700112 / 700531 / 700109",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Standstill Monitoring Alarm. \u2014 Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "Medium",
    "downtime": 0.91,
    "remedySummary": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).",
    "fullRemedy": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "reason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "sapTicket": "SAP-PM-2026-8825",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 3276,
    "downtimeDurationStr": "00h 54m 36s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1026",
    "timestamp": "2026-07-16 00:35:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Pallete changing issue \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.42,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8826",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 1512,
    "downtimeDurationStr": "00h 25m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1027",
    "timestamp": "2026-07-14 18:14:33",
    "identifier": "700810 / 700811 / 700500",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Main Spindle;Temperature Senors high \u2014 Main Spindle Bearing / Stator Over-Temperature",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "Critical",
    "downtime": 0.0,
    "remedySummary": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).",
    "fullRemedy": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "reason": "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped. Sensor telemetry recorded spindle motor temp peaking at 58.0C.",
    "sapTicket": "SAP-PM-2026-8827",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1028",
    "timestamp": "2026-07-13 16:47:05",
    "identifier": "700810 / 700811 / 700500",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Main Spindle temperature sensors high \u2014 Main Spindle Bearing / Stator Over-Temperature",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "Critical",
    "downtime": 0.0,
    "remedySummary": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).",
    "fullRemedy": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "reason": "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped. Sensor telemetry recorded spindle motor temp peaking at 58.0C.",
    "sapTicket": "SAP-PM-2026-8828",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1029",
    "timestamp": "2026-07-13 14:45:57",
    "identifier": "700113 / Siemens 25201",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Axis SP1 Drive fault \u2014 Main Spindle SP1 Drive Controller Fault",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "High",
    "downtime": 0.0,
    "remedySummary": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.",
    "fullRemedy": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "reason": "Siemens Sinumerik drive controller fault on SP1 axis due to following error, speed controller saturation, or encoder signal loss during rapid acceleration.",
    "sapTicket": "SAP-PM-2026-8829",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1030",
    "timestamp": "2026-07-12 15:00:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "pallet changing issue \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 1.0,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8830",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 3600,
    "downtimeDurationStr": "01h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1031",
    "timestamp": "2026-07-12 06:54:53",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Bavius 4M1 Axis software limited coming \u2014 Machine Subsystem Interruption: Bavius 4M1 Axis software limited coming",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 0.0,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8831",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1032",
    "timestamp": "2026-07-11 15:30:00",
    "identifier": "700126 / 700904",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Main spindal:Error during tool changing \u2014 ATC Tool Magazine Flap Cover / Door Open Fault",
    "status": "CLEARED",
    "category": "Tool Changer (ATC) & Clamping",
    "severity": "Medium",
    "downtime": 1.0,
    "remedySummary": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.",
    "fullRemedy": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "reason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "sapTicket": "SAP-PM-2026-8832",
    "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2, Pages 28-33",
    "historyPrecedent": "Occurred 2 times in Breton K60 over last 6 months. Previous Action: Cleaned sensor B47 and re-torqued clamping claw.",
    "downtimeSeconds": 3600,
    "downtimeDurationStr": "01h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1033",
    "timestamp": "2026-07-11 07:20:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "pallet changing issue \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 0.67,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8833",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 2412,
    "downtimeDurationStr": "00h 40m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1034",
    "timestamp": "2026-07-07 04:36:25",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "AXIS A&B TRIGGERED \u2014 Machine Subsystem Interruption: AXIS A&B TRIGGERED",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 0.39,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8834",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 1404,
    "downtimeDurationStr": "00h 23m 24s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1035",
    "timestamp": "2026-07-07 16:52:49",
    "identifier": "700113 / 700120 / Siemens 21612",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "spindle drive fault and line clamping \u2014 Catastrophic Spindle Drive Trip & Hydraulic Line Clamping Lockup",
    "status": "CLEARED",
    "category": "Spindle System & Clamping",
    "severity": "Critical",
    "downtime": 71.99,
    "remedySummary": "1. Electrically isolate machine; inspect Siemens drive converter module (Motor Module / Infeed) for DC link faults or blown fuses.",
    "fullRemedy": "1. Electrically isolate machine; inspect Siemens drive converter module (Motor Module / Infeed) for DC link faults or blown fuses.\n2. Measure spindle phase winding resistance (difference must not exceed 0.1 Ohm) and megohmmeter insulation resistance (> 50 MOhm to ground).\n3. Inspect hydraulic line clamping proportional relief valve and manifold pressure gauges (check 120 bar clamping / unclamp circuit).\n4. Bleed hydraulic line clamp circuit; verify smooth disengagement under manual jog.\n5. Reset drive parameters, clear Sinumerik drive alarms, and run uncoupled motor test.",
    "reason": "High spindle current overload (55.2A) and drive load surge (59.9%) during high-speed cutting triggered Siemens SINUMERIK drive power module shutdown and emergency clamp engagement, locking axes.",
    "sapTicket": "SAP-PM-2026-8835",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 259163,
    "downtimeDurationStr": "71h 59m 23s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1036",
    "timestamp": "2026-07-06 15:30:04",
    "identifier": "700112 / 700531 / 700109",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Bavius 4M1 Axis C11 Standstill monitorin \u2014 Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "High",
    "downtime": 1.0,
    "remedySummary": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).",
    "fullRemedy": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "reason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "sapTicket": "SAP-PM-2026-8836",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 3600,
    "downtimeDurationStr": "01h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1037",
    "timestamp": "2026-07-06 20:30:00",
    "identifier": "701018 / 701019 / 701033",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Bavius 4M1 Pallet Changing Issue. \u2014 Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "status": "CLEARED",
    "category": "Pallet Changer",
    "severity": "Medium",
    "downtime": 1.0,
    "remedySummary": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.",
    "fullRemedy": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "reason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "sapTicket": "SAP-PM-2026-8837",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 3600,
    "downtimeDurationStr": "01h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1038",
    "timestamp": "2026-07-04 04:48:00",
    "identifier": "700748 / 700750",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Vaccum Issue \u2014 Vacuum Clamping Failure (Level Below -600 mbar)",
    "status": "CLEARED",
    "category": "Vacuum Workholding",
    "severity": "High",
    "downtime": 0.2,
    "remedySummary": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.",
    "fullRemedy": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "reason": "VOC-AD-S-63/100 vacuum station dropped below required -600 mbar safe clamping limit. Causes: Damaged foam sealing cord on vacuum table fixture, liquid separator overflow, or clogged suction filter.",
    "sapTicket": "SAP-PM-2026-8838",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 720,
    "downtimeDurationStr": "00h 12m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1039",
    "timestamp": "2026-07-03 18:30:00",
    "identifier": "700425 / Siemens NCU",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Bavius 4M1 Control panel light blinking \u2014 CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "status": "CLEARED",
    "category": "CNC Controller & Panel",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.",
    "fullRemedy": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "reason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "sapTicket": "SAP-PM-2026-8839",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1040",
    "timestamp": "2026-07-01 19:00:00",
    "identifier": "700112 / 700531 / 700109",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Bavius 4M1 line clamp not opened \u2014 Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "Medium",
    "downtime": 0.75,
    "remedySummary": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).",
    "fullRemedy": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "reason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "sapTicket": "SAP-PM-2026-8840",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 2700,
    "downtimeDurationStr": "00h 45m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1041",
    "timestamp": "2026-06-30 03:00:00",
    "identifier": "700123 / 700120",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Bavius 4M1 Main Spindle Emergency Stop A \u2014 Main Spindle Emergency Stop Interruption",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "High",
    "downtime": 0.5,
    "remedySummary": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.",
    "fullRemedy": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "reason": "Safety Integrated circuit or process limit trip (excessive drive torque spike, enclosure door interlock switch chatter, or tool monitoring collision sensor).",
    "sapTicket": "SAP-PM-2026-8841",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1042",
    "timestamp": "2026-06-29 11:15:00",
    "identifier": "700100",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "ATC flap door open autocycle \u2014 Machine Subsystem Interruption: ATC flap door open autocycle",
    "status": "CLEARED",
    "category": "General Mechanical / Electrical",
    "severity": "Medium",
    "downtime": 3.75,
    "remedySummary": "1. Check active alarm message on SINUMERIK CNC screen.",
    "fullRemedy": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "reason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "sapTicket": "SAP-PM-2026-8842",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 13500,
    "downtimeDurationStr": "03h 45m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1043",
    "timestamp": "2026-06-28 01:40:00",
    "identifier": "Safety Integrated Stop A/B",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Axis A & B Triggered \u2014 Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "status": "CLEARED",
    "category": "Axis Drives & Motion",
    "severity": "High",
    "downtime": 0.5,
    "remedySummary": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.",
    "fullRemedy": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "reason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "sapTicket": "SAP-PM-2026-8843",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Chapter 9 (Troubleshooting), Page 204",
    "historyPrecedent": "N/A (First occurrence logged under live telemetry tracking)",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1044",
    "timestamp": "2026-06-28 11:15:00",
    "identifier": "700126 / 700904",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Auto cycle flap cover open due to cut co \u2014 ATC Tool Magazine Flap Cover / Door Open Fault",
    "status": "CLEARED",
    "category": "Tool Changer (ATC) & Clamping",
    "severity": "Medium",
    "downtime": 3.75,
    "remedySummary": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.",
    "fullRemedy": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "reason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "sapTicket": "SAP-PM-2026-8844",
    "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2, Pages 28-33",
    "historyPrecedent": "Occurred 2 times in Breton K60 over last 6 months. Previous Action: Cleaned sensor B47 and re-torqued clamping claw.",
    "downtimeSeconds": 13500,
    "downtimeDurationStr": "03h 45m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1045",
    "timestamp": "2026-06-27 11:07:54",
    "identifier": "700126 / 700904",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "IN Auto cycle atc door open due to axis \u2014 ATC Tool Magazine Flap Cover / Door Open Fault",
    "status": "CLEARED",
    "category": "Tool Changer (ATC) & Clamping",
    "severity": "Medium",
    "downtime": 1.22,
    "remedySummary": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.",
    "fullRemedy": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "reason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "sapTicket": "SAP-PM-2026-8845",
    "manualCitation": "Tool Control Operating Instructions 146598, Section 3.2, Pages 28-33",
    "historyPrecedent": "Occurred 2 times in Breton K60 over last 6 months. Previous Action: Cleaned sensor B47 and re-torqued clamping claw.",
    "downtimeSeconds": 4392,
    "downtimeDurationStr": "01h 13m 12s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1046",
    "timestamp": "2026-06-25 16:32:30",
    "identifier": "700121 / 700122",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "air pressure drop issue \u2014 Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "status": "CLEARED",
    "category": "Pneumatic System",
    "severity": "Medium",
    "downtime": 0.5,
    "remedySummary": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.",
    "fullRemedy": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "reason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "sapTicket": "SAP-PM-2026-8846",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 2.3, Page 116",
    "historyPrecedent": "Occurred 2 times in Modig HHV3 C over last 6 months. Previous Action: Replaced cracked 12mm polyurethane air feed line.",
    "downtimeSeconds": 1800,
    "downtimeDurationStr": "00h 30m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1047",
    "timestamp": "2026-06-24 05:30:00",
    "identifier": "700748 / 700750",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "Vacume error \u2014 Vacuum Clamping Failure (Level Below -600 mbar)",
    "status": "CLEARED",
    "category": "Vacuum Workholding",
    "severity": "High",
    "downtime": 1.0,
    "remedySummary": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.",
    "fullRemedy": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "reason": "VOC-AD-S-63/100 vacuum station dropped below required -600 mbar safe clamping limit. Causes: Damaged foam sealing cord on vacuum table fixture, liquid separator overflow, or clogged suction filter.",
    "sapTicket": "SAP-PM-2026-8847",
    "manualCitation": "Bavius HBZ CC Operating Instructions, Section 4.8, Pages 142-148",
    "historyPrecedent": "Occurred 4 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Flushed hydraulic valve spool and adjusted switch B22.",
    "downtimeSeconds": 3600,
    "downtimeDurationStr": "01h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1048",
    "timestamp": "2026-06-10 06:36:59",
    "identifier": "700730 / 700731",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "spindle vibro meter alarm \u2014 Spindle Excessive Vibration / Bearing Acoustic Deterioration",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "Critical",
    "downtime": 3.88,
    "remedySummary": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.",
    "fullRemedy": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "reason": "SiViB Record 31 spindle vibration monitor exceeded Warning/Alarm threshold (> 2.5 pc / 4.5 mm/s RMS). Root cause: Toolholder unbalance (quality grade worse than ISO 1940 G2.5), spindle bearing cage wear/micro-spalling, or loose HSK-63 clamping segment causing centrifugal flutter.",
    "sapTicket": "SAP-PM-2026-8848",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 13968,
    "downtimeDurationStr": "03h 52m 48s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  },
  {
    "eventId": "EV-1049",
    "timestamp": "2026-06-08 07:08:57",
    "identifier": "700730 / 700731",
    "machineName": "Bavius HBZ CC 4MTR (N01-02)",
    "description": "spindle heavy sound create \u2014 Spindle Excessive Vibration / Bearing Acoustic Deterioration",
    "status": "CLEARED",
    "category": "Spindle System",
    "severity": "Critical",
    "downtime": 0.0,
    "remedySummary": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.",
    "fullRemedy": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "reason": "SiViB Record 31 spindle vibration monitor exceeded Warning/Alarm threshold (> 2.5 pc / 4.5 mm/s RMS). Root cause: Toolholder unbalance (quality grade worse than ISO 1940 G2.5), spindle bearing cage wear/micro-spalling, or loose HSK-63 clamping segment causing centrifugal flutter.",
    "sapTicket": "SAP-PM-2026-8849",
    "manualCitation": "Fischer MFW-1920 HSC Spindle Manual, Ch. 7.2, Pages 84-88",
    "historyPrecedent": "Occurred 3 times in Bavius 4mtr N01-02 over last 6 months. Previous Action: Cleaned KRA150 condenser filter mat and topped up R455 coolant.",
    "downtimeSeconds": 0,
    "downtimeDurationStr": "00h 00m 00s",
    "sparesRequired": "FESTO Microfilter Cartridge (P/N: 532789), Polyurethane Air Hose 12mm, Push-in Couplings"
  }
];
window.BAVIUS_ALERTS_DATA = [
  {
    "Timestamp": "2026-09-22 09:45:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-09-20 07:15:29",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle Bearing / Stator Over-Temperature",
    "OEMAlarmCode": "700810 / 700811 / 700500",
    "Severity": "Critical",
    "PastIncidents": "3 times in last 6 months (Last: 2026-09-20)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-09-20",
    "ProbableReason": "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped. Sensor telemetry recorded spindle motor temp peaking at 61.0C.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 61.0C (Warning threshold: 50C). | Spindle current surging to 29.0A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 48.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "ActionToFix": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.28
  },
  {
    "Timestamp": "2026-09-19 15:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "OEMAlarmCode": "700112 / 700531 / 700109",
    "Severity": "Medium",
    "PastIncidents": "6 times in last 6 months (Last: 2026-09-19)",
    "PastIncidentsCount": 6,
    "LastOccurred": "2026-09-19",
    "ProbableReason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 62.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 52.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "ActionToFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-09-16 14:12:49",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: DRIVE FAULT ISSUE..",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-09-16)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-09-16",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 62.0C (Warning threshold: 50C). | High Drive Load spike observed up to 29.3% under heavy cutting. | Axis Y11 torque sustained high at 49.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.3
  },
  {
    "Timestamp": "2026-09-11 08:53:44",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Cooling & Recooler",
    "BreakdownType": "Recooler Tank Liquid Level Below Minimum Limit",
    "OEMAlarmCode": "700503 / 700703",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-09-11)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-09-11",
    "ProbableReason": "Chiller tank liquid level switch (LE/AQ) tripped due to fluid evaporation or minor coupling leakage in the spindle closed cooling circuit.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Inspect cooling hoses, fittings, and spindle rotary union for external leaks.\n2. Top up reservoir with approved distilled water/antifreeze blend to upper sight glass mark.\n3. Bleed air from the pump using air bleed valve (JO); verify alarm resets automatically.",
    "ActionToFix": "1. Inspect cooling hoses, fittings, and spindle rotary union for external leaks.\n2. Top up reservoir with approved distilled water/antifreeze blend to upper sight glass mark.\n3. Bleed air from the pump using air bleed valve (JO); verify alarm resets automatically.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.12
  },
  {
    "Timestamp": "2026-09-08 17:07:44",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-09-08 00:17:20",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.71
  },
  {
    "Timestamp": "2026-09-07 15:05:11",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.49
  },
  {
    "Timestamp": "2026-09-07 08:13:55",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-09-06 14:35:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.42
  },
  {
    "Timestamp": "2026-09-05 02:40:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "Tool Magazine Rotary Axis TM11 Positioning Malfunction",
    "OEMAlarmCode": "700114 / TM11",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-09-05)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-09-05",
    "ProbableReason": "Tool magazine servo chain drive TM11 positioning lag, mechanical jamming from foreign object, or encoder communication glitch during pocket indexing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 49.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect tool magazine chain tension, drive sprocket, and pockets for foreign debris or tilted toolholder.\n2. Check TM11 servo motor thermal trip and power cable connection.\n3. Re-reference TM11 axis in JOG mode and execute test indexing for pockets 1 through 60.",
    "ActionToFix": "1. Inspect tool magazine chain tension, drive sprocket, and pockets for foreign debris or tilted toolholder.\n2. Check TM11 servo motor thermal trip and power cable connection.\n3. Re-reference TM11 axis in JOG mode and execute test indexing for pockets 1 through 60.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-08-30 11:04:45",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "ATC Tool Magazine Flap Cover / Door Open Fault",
    "OEMAlarmCode": "700126 / 700904",
    "Severity": "Medium",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-30)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-30",
    "ProbableReason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "ActionToFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.42
  },
  {
    "Timestamp": "2026-08-24 12:58:41",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: AIR PRESURES DROP ISSUE",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-08-24)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-08-24",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-08-21 10:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Pre-warning: 4 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 49.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.5
  },
  {
    "Timestamp": "2026-08-19 04:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Coolant & Filtration",
    "BreakdownType": "Coolant Soil Tank High Level / Sludge Overflow",
    "OEMAlarmCode": "701338 / 701342",
    "Severity": "Medium",
    "PastIncidents": "4 times in last 6 months (Last: 2026-08-19)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-08-19",
    "ProbableReason": "Knoll KF 200 compact filter soil tank level reached high alarm float switch due to high aluminum chip extraction volume and delayed filter fleece indexing.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 63.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "ActionToFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.75
  },
  {
    "Timestamp": "2026-08-18 08:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-08-17 20:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.5
  },
  {
    "Timestamp": "2026-08-16 14:03:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 45.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.62
  },
  {
    "Timestamp": "2026-08-12 12:20:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle Emergency Stop Interruption",
    "OEMAlarmCode": "700123 / 700120",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-08-12)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-08-12",
    "ProbableReason": "Safety Integrated circuit or process limit trip (excessive drive torque spike, enclosure door interlock switch chatter, or tool monitoring collision sensor).",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 60.0C (Warning threshold: 50C). | High Drive Load spike observed up to 66.8% under heavy cutting. | Spindle current surging to 46.9A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 49.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "ActionToFix": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.33
  },
  {
    "Timestamp": "2026-08-08 10:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: c axis drive fault issue",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-08-08)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-08-08",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.0
  },
  {
    "Timestamp": "2026-08-08 02:10:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "OEMAlarmCode": "Safety Integrated Stop A/B",
    "Severity": "High",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-08)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-08",
    "ProbableReason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "ActionToFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-08-06 16:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 61.0C (Warning threshold: 50C). | High Drive Load spike observed up to 29.9% under heavy cutting. | Spindle current surging to 54.2A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 73.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-08-02 04:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 61.0C (Warning threshold: 50C). | High Drive Load spike observed up to 47.2% under heavy cutting. | Axis Y11 torque sustained high at 48.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.83
  },
  {
    "Timestamp": "2026-07-28 18:50:20",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "OEMAlarmCode": "Safety Integrated Stop A/B",
    "Severity": "High",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-08)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-08",
    "ProbableReason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 46.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "ActionToFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-07-28 17:40:40",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Least one axis is not safety referenced.",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-07-28)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-07-28",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 46.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-07-25 16:26:20",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "OEMAlarmCode": "700112 / 700531 / 700109",
    "Severity": "Medium",
    "PastIncidents": "6 times in last 6 months (Last: 2026-09-19)",
    "PastIncidentsCount": 6,
    "LastOccurred": "2026-09-19",
    "ProbableReason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 61.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "ActionToFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.91
  },
  {
    "Timestamp": "2026-07-16 00:35:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 48.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.42
  },
  {
    "Timestamp": "2026-07-14 18:14:33",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle Bearing / Stator Over-Temperature",
    "OEMAlarmCode": "700810 / 700811 / 700500",
    "Severity": "Critical",
    "PastIncidents": "3 times in last 6 months (Last: 2026-09-20)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-09-20",
    "ProbableReason": "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped. Sensor telemetry recorded spindle motor temp peaking at 58.0C.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 49.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "ActionToFix": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-07-13 16:47:05",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle Bearing / Stator Over-Temperature",
    "OEMAlarmCode": "700810 / 700811 / 700500",
    "Severity": "Critical",
    "PastIncidents": "3 times in last 6 months (Last: 2026-09-20)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-09-20",
    "ProbableReason": "Continuous high-speed operation (up to 26,000-28,000 RPM) causing thermal saturation in Fischer MFW-1920 hybrid spindle bearings, coupled with inadequate recooler heat dissipation or cooling jacket flow restriction. Stator winding PTC sensors tripped. Sensor telemetry recorded spindle motor temp peaking at 58.0C.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.9 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "ActionToFix": "1. Switch on / verify spindle recooler (Rittal/Bavius KRA150) flow and setpoint (nominal 20-22C).\n2. Inspect recooler air-cooled condenser fins for dust clogging and clean filter mat.\n3. Check spindle cooling circuit flow monitor switch (Bavius alarm 700501/700528).\n4. Measure PTC sensor resistance across connector pins (must be < 3000 Ohm at 25C; if > 3000 Ohm or open circuit, replace/service spindle per Fischer manual Chap 7.2).\n5. Allow 30 min cooling cycle and restart under graduated warm-up program.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-07-13 14:45:57",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle SP1 Drive Controller Fault",
    "OEMAlarmCode": "700113 / Siemens 25201",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-07-13)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-07-13",
    "ProbableReason": "Siemens Sinumerik drive controller fault on SP1 axis due to following error, speed controller saturation, or encoder signal loss during rapid acceleration.",
    "TelemetryLeadingIndicators": "Pre-warning: 3 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 64.1 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "ActionToFix": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-07-12 15:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 59.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-07-12 06:54:53",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Bavius 4M1 Axis software limited coming",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-07-12)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-07-12",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 45.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-07-11 15:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "ATC Tool Magazine Flap Cover / Door Open Fault",
    "OEMAlarmCode": "700126 / 700904",
    "Severity": "Medium",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-30)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-30",
    "ProbableReason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 46.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "ActionToFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-07-11 07:20:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "High Drive Load spike observed up to 77.8% under heavy cutting. | Axis Y11 torque sustained high at 57.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.67
  },
  {
    "Timestamp": "2026-07-07 04:36:25",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: AXIS A&B TRIGGERED",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-07-07)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-07-07",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.39
  },
  {
    "Timestamp": "2026-07-07 16:52:49",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System & Clamping",
    "BreakdownType": "Catastrophic Spindle Drive Trip & Hydraulic Line Clamping Lockup",
    "OEMAlarmCode": "700113 / 700120 / Siemens 21612",
    "Severity": "Critical",
    "PastIncidents": "1 times in last 6 months (Last: 2026-07-07)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-07-07",
    "ProbableReason": "High spindle current overload (55.2A) and drive load surge (59.9%) during high-speed cutting triggered Siemens SINUMERIK drive power module shutdown and emergency clamp engagement, locking axes.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Electrically isolate machine; inspect Siemens drive converter module (Motor Module / Infeed) for DC link faults or blown fuses.\n2. Measure spindle phase winding resistance (difference must not exceed 0.1 Ohm) and megohmmeter insulation resistance (> 50 MOhm to ground).\n3. Inspect hydraulic line clamping proportional relief valve and manifold pressure gauges (check 120 bar clamping / unclamp circuit).\n4. Bleed hydraulic line clamp circuit; verify smooth disengagement under manual jog.\n5. Reset drive parameters, clear Sinumerik drive alarms, and run uncoupled motor test.",
    "ActionToFix": "1. Electrically isolate machine; inspect Siemens drive converter module (Motor Module / Infeed) for DC link faults or blown fuses.\n2. Measure spindle phase winding resistance (difference must not exceed 0.1 Ohm) and megohmmeter insulation resistance (> 50 MOhm to ground).\n3. Inspect hydraulic line clamping proportional relief valve and manifold pressure gauges (check 120 bar clamping / unclamp circuit).\n4. Bleed hydraulic line clamp circuit; verify smooth disengagement under manual jog.\n5. Reset drive parameters, clear Sinumerik drive alarms, and run uncoupled motor test.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 71.99
  },
  {
    "Timestamp": "2026-07-06 15:30:04",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "OEMAlarmCode": "700112 / 700531 / 700109",
    "Severity": "High",
    "PastIncidents": "6 times in last 6 months (Last: 2026-09-19)",
    "PastIncidentsCount": 6,
    "LastOccurred": "2026-09-19",
    "ProbableReason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "ActionToFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-07-06 20:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-07-04 04:48:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Vacuum Workholding",
    "BreakdownType": "Vacuum Clamping Failure (Level Below -600 mbar)",
    "OEMAlarmCode": "700748 / 700750",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-07-04)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-07-04",
    "ProbableReason": "VOC-AD-S-63/100 vacuum station dropped below required -600 mbar safe clamping limit. Causes: Damaged foam sealing cord on vacuum table fixture, liquid separator overflow, or clogged suction filter.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 57.0C (Warning threshold: 50C). | High Drive Load spike observed up to 66.6% under heavy cutting. | Axis Y11 torque sustained high at 56.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "ActionToFix": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.2
  },
  {
    "Timestamp": "2026-07-03 18:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "High Drive Load spike observed up to 37.0% under heavy cutting. | Spindle current surging to 46.5A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 95.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-07-01 19:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "OEMAlarmCode": "700112 / 700531 / 700109",
    "Severity": "Medium",
    "PastIncidents": "6 times in last 6 months (Last: 2026-09-19)",
    "PastIncidentsCount": 6,
    "LastOccurred": "2026-09-19",
    "ProbableReason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | High Drive Load spike observed up to 26.4% under heavy cutting. | Axis Y11 torque sustained high at 60.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "ActionToFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.75
  },
  {
    "Timestamp": "2026-06-30 03:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle Emergency Stop Interruption",
    "OEMAlarmCode": "700123 / 700120",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-08-12)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-08-12",
    "ProbableReason": "Safety Integrated circuit or process limit trip (excessive drive torque spike, enclosure door interlock switch chatter, or tool monitoring collision sensor).",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 45.8 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "ActionToFix": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-06-29 11:15:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: ATC flap door open autocycle",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-06-29)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-06-29",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 47.8 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 3.75
  },
  {
    "Timestamp": "2026-06-28 01:40:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "OEMAlarmCode": "Safety Integrated Stop A/B",
    "Severity": "High",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-08)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-08",
    "ProbableReason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | High Drive Load spike observed up to 56.1% under heavy cutting. | Spindle current surging to 37.1A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 66.9 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "ActionToFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-06-28 11:15:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "ATC Tool Magazine Flap Cover / Door Open Fault",
    "OEMAlarmCode": "700126 / 700904",
    "Severity": "Medium",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-30)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-30",
    "ProbableReason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "TelemetryLeadingIndicators": "High Drive Load spike observed up to 38.2% under heavy cutting. | Axis Y11 torque sustained high at 100.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "ActionToFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 3.75
  },
  {
    "Timestamp": "2026-06-27 11:07:54",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "ATC Tool Magazine Flap Cover / Door Open Fault",
    "OEMAlarmCode": "700126 / 700904",
    "Severity": "Medium",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-30)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-30",
    "ProbableReason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Spindle current surging to 31.9A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 55.9 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "ActionToFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.22
  },
  {
    "Timestamp": "2026-06-25 16:32:30",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | High Drive Load spike observed up to 25.9% under heavy cutting. | Axis Y11 torque sustained high at 61.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-06-24 05:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Vacuum Workholding",
    "BreakdownType": "Vacuum Clamping Failure (Level Below -600 mbar)",
    "OEMAlarmCode": "700748 / 700750",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-07-04)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-07-04",
    "ProbableReason": "VOC-AD-S-63/100 vacuum station dropped below required -600 mbar safe clamping limit. Causes: Damaged foam sealing cord on vacuum table fixture, liquid separator overflow, or clogged suction filter.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | High Drive Load spike observed up to 49.8% under heavy cutting. | Axis Y11 torque sustained high at 51.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "ActionToFix": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-06-10 06:36:59",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Spindle Excessive Vibration / Bearing Acoustic Deterioration",
    "OEMAlarmCode": "700730 / 700731",
    "Severity": "Critical",
    "PastIncidents": "3 times in last 6 months (Last: 2026-06-10)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-06-10",
    "ProbableReason": "SiViB Record 31 spindle vibration monitor exceeded Warning/Alarm threshold (> 2.5 pc / 4.5 mm/s RMS). Root cause: Toolholder unbalance (quality grade worse than ISO 1940 G2.5), spindle bearing cage wear/micro-spalling, or loose HSK-63 clamping segment causing centrifugal flutter.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "ActionToFix": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 3.88
  },
  {
    "Timestamp": "2026-06-08 07:08:57",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Spindle Excessive Vibration / Bearing Acoustic Deterioration",
    "OEMAlarmCode": "700730 / 700731",
    "Severity": "Critical",
    "PastIncidents": "3 times in last 6 months (Last: 2026-06-10)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-06-10",
    "ProbableReason": "SiViB Record 31 spindle vibration monitor exceeded Warning/Alarm threshold (> 2.5 pc / 4.5 mm/s RMS). Root cause: Toolholder unbalance (quality grade worse than ISO 1940 G2.5), spindle bearing cage wear/micro-spalling, or loose HSK-63 clamping segment causing centrifugal flutter.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 47.0 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "ActionToFix": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-06-07 22:59:17",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Baviu 4M1 Axis Drive Fault.",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-06-07)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-06-07",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 48.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-06-06 14:53:12",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: B11-AXIS (MAIN SPINDAL)MOVEMENT NOT ALLO",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-06-06)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-06-06",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 48.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-06-06 23:56:39",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Bavius 4M1 Drive Fault Issue.",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-06-06)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-06-06",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Spindle current surging to 26.7A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 49.0 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-06-05 12:48:09",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle Emergency Stop Interruption",
    "OEMAlarmCode": "700123 / 700120",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-08-12)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-08-12",
    "ProbableReason": "Safety Integrated circuit or process limit trip (excessive drive torque spike, enclosure door interlock switch chatter, or tool monitoring collision sensor).",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 51.9 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "ActionToFix": "1. Check Safety Integrated diagnostic screen on SINUMERIK Operate for initiating channel.\n2. Verify enclosure door guard interlocks and magnetic safety switches (Bavius alarm 700124/700128).\n3. Inspect cutting tool and workpiece for tool breakage or jamming.\n4. Reset safety circuit, cycle E-stop pushbutton, and test in JOG mode.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-06-01 15:48:50",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "ATC Tool Magazine Flap Cover / Door Open Fault",
    "OEMAlarmCode": "700126 / 700904",
    "Severity": "Medium",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-30)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-30",
    "ProbableReason": "Pneumatic cylinder operating the magazine shutter flap failed to open/close within time limit, or magnetic reed sensor failed to detect end position due to chip accumulation in guide tracks.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 51.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "ActionToFix": "1. Remove chips and accumulated swarf from ATC shutter slide rails and pneumatic cylinder rod.\n2. Verify pneumatic cylinder operating pressure (min 5.5 bar) and flow control throttle valves.\n3. Check magnetic reed sensors on cylinder body; verify green LED triggers at full stroke.\n4. Manually exercise flap open/close via operator panel softkeys before resuming automatic cycle.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-05-26 20:00:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "Main Spindle Tool Clamping / Gripper Mechanism Fault",
    "OEMAlarmCode": "700300 / 700905",
    "Severity": "High",
    "PastIncidents": "4 times in last 6 months (Last: 2026-05-26)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-05-26",
    "ProbableReason": "Tool clamp proximity switch S4 (tool clamped) failed to confirm within time limit, or clamping force deficient due to swarf buildup in HSK taper or worn disc springs.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | High Drive Load spike observed up to 27.7% under heavy cutting. | Axis Y11 torque sustained high at 82.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "ActionToFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-05-25 10:21:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.0
  },
  {
    "Timestamp": "2026-05-22 16:50:20",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 55.0C (Warning threshold: 50C). | High Drive Load spike observed up to 34.7% under heavy cutting. | Spindle current surging to 142.3A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 75.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.33
  },
  {
    "Timestamp": "2026-05-17 10:12:38",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Coolant & Filtration",
    "BreakdownType": "Chip Conveyor Motor Overload / Mechanical Jam",
    "OEMAlarmCode": "701305 / 701349",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-05-17)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-05-17",
    "ProbableReason": "Conveyor hinged belt jammed by clustered aluminum chips or stringy swarf, causing motor bimetallic thermal overload relay to trip.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | High Drive Load spike observed up to 38.1% under heavy cutting. | Axis Y11 torque sustained high at 59.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Press Conveyor Reverse jog button to dislodge swarf bunching at discharge chute.\n2. Inspect conveyor belt hinges and remove jammed chips with safety rake.\n3. Reset motor circuit breaker in electrical control cabinet upstream of MS.\n4. Verify conveyor drive chain lubrication and adjust torque limiter clutch tension.",
    "ActionToFix": "1. Press Conveyor Reverse jog button to dislodge swarf bunching at discharge chute.\n2. Inspect conveyor belt hinges and remove jammed chips with safety rake.\n3. Reset motor circuit breaker in electrical control cabinet upstream of MS.\n4. Verify conveyor drive chain lubrication and adjust torque limiter clutch tension.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-05-13 12:39:27",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Bavius 4M1 Pllet Changing Issue.",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-05-13)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-05-13",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 57.0C (Warning threshold: 50C). | High Drive Load spike observed up to 26.6% under heavy cutting. | Axis Y11 torque sustained high at 55.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.32
  },
  {
    "Timestamp": "2026-05-13 15:29:03",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 55.0C (Warning threshold: 50C). | High Drive Load spike observed up to 49.2% under heavy cutting. | Spindle current surging to 22.7A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 61.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-05-12 09:46:43",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Bavius 4M1 Axis Clamping active Alaram.",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-05-12)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-05-12",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 49.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.32
  },
  {
    "Timestamp": "2026-05-12 12:43:07",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 60.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.8 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-05-10 12:59:49",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle SP1 Drive Controller Fault",
    "OEMAlarmCode": "700113 / Siemens 25201",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-07-13)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-07-13",
    "ProbableReason": "Siemens Sinumerik drive controller fault on SP1 axis due to following error, speed controller saturation, or encoder signal loss during rapid acceleration.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 49.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "ActionToFix": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-05-08 16:45:16",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 59.0C (Warning threshold: 50C). | High Drive Load spike observed up to 27.5% under heavy cutting. | Axis Y11 torque sustained high at 50.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.23
  },
  {
    "Timestamp": "2026-05-06 03:36:13",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Vacuum Workholding",
    "BreakdownType": "Vacuum Clamping Failure (Level Below -600 mbar)",
    "OEMAlarmCode": "700748 / 700750",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-07-04)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-07-04",
    "ProbableReason": "VOC-AD-S-63/100 vacuum station dropped below required -600 mbar safe clamping limit. Causes: Damaged foam sealing cord on vacuum table fixture, liquid separator overflow, or clogged suction filter.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 48.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "ActionToFix": "1. Inspect vacuum fixture rubber sealing gasket for cuts, displacement, or swarf contamination.\n2. Drain liquid feedback separator container [glass tank item 13] by opening drain valve 2V2.\n3. Clean vacuum station pre-filter and fine-filter mesh from machining sludge.\n4. Check vacuum pump oil level and verify pressure switch 1Z2 reads <= -600 mbar before NC Start.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 3.9
  },
  {
    "Timestamp": "2026-05-03 11:30:12",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Cooling & Recooler",
    "BreakdownType": "Spindle Chiller Collective Fault (CLS Recooler)",
    "OEMAlarmCode": "700502 / 700702",
    "Severity": "High",
    "PastIncidents": "1 times in last 6 months (Last: 2026-05-03)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-05-03",
    "ProbableReason": "Rittal/Bavius KRA150 spindle recooler tripped high refrigerant pressure switch PA or compressor thermal overload due to clogged condenser filter mat or high ambient shop temperature.",
    "TelemetryLeadingIndicators": "Axis Y11 torque sustained high at 48.8 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Clean air-cooled condenser fins and wash/replace air intake filter mat (FAC).\n2. Inspect recooler tank fluid level on level gauge (LI); refill distilled water-glycol mixture (acc. to VGB-R 455 P).\n3. Verify circulation pump (CO) is spinning freely and cooling flow indicator (AS) shows positive flow.\n4. Allow compressor to cool down for 30 minutes; reset high-pressure limiter switch.",
    "ActionToFix": "1. Clean air-cooled condenser fins and wash/replace air intake filter mat (FAC).\n2. Inspect recooler tank fluid level on level gauge (LI); refill distilled water-glycol mixture (acc. to VGB-R 455 P).\n3. Verify circulation pump (CO) is spinning freely and cooling flow indicator (AS) shows positive flow.\n4. Allow compressor to cool down for 30 minutes; reset high-pressure limiter switch.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.75
  },
  {
    "Timestamp": "2026-05-02 21:29:16",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "OEMAlarmCode": "Safety Integrated Stop A/B",
    "Severity": "High",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-08)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-08",
    "ProbableReason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 51.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "ActionToFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.52
  },
  {
    "Timestamp": "2026-05-02 07:07:36",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "OEMAlarmCode": "700112 / 700531 / 700109",
    "Severity": "Medium",
    "PastIncidents": "6 times in last 6 months (Last: 2026-09-19)",
    "PastIncidentsCount": 6,
    "LastOccurred": "2026-09-19",
    "ProbableReason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 77.6 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "ActionToFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-04-30 07:15:20",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.58
  },
  {
    "Timestamp": "2026-04-30 01:05:42",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "Main Spindle Tool Clamping / Gripper Mechanism Fault",
    "OEMAlarmCode": "700300 / 700905",
    "Severity": "High",
    "PastIncidents": "4 times in last 6 months (Last: 2026-05-26)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-05-26",
    "ProbableReason": "Tool clamp proximity switch S4 (tool clamped) failed to confirm within time limit, or clamping force deficient due to swarf buildup in HSK taper or worn disc springs.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "ActionToFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.41
  },
  {
    "Timestamp": "2026-04-26 23:42:17",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 4.0
  },
  {
    "Timestamp": "2026-04-25 23:34:14",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 49.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.43
  },
  {
    "Timestamp": "2026-04-24 23:17:33",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.39
  },
  {
    "Timestamp": "2026-04-24 11:50:25",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Safety Integrated Stop A/B / Safe Velocity Limit Breach",
    "OEMAlarmCode": "Safety Integrated Stop A/B",
    "Severity": "High",
    "PastIncidents": "5 times in last 6 months (Last: 2026-08-08)",
    "PastIncidentsCount": 5,
    "LastOccurred": "2026-08-08",
    "ProbableReason": "Siemens Safety Integrated triggered emergency stop due to velocity cross-check discrepancy between dual-channel encoder signals or unreferenced safe axis position.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 57.0C (Warning threshold: 50C). | High Drive Load spike observed up to 25.4% under heavy cutting. | Axis Y11 torque sustained high at 53.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "ActionToFix": "1. Inspect safety encoder cables on A/B/SP1 axes for noise interference or loose shielding.\n2. Perform safe axis referencing procedure for all kinematics axes in JOG mode.\n3. Perform SI test stop routine (Channel 01 & 02) to verify safety shutdown path.\n4. Clear CNC alarms and verify Safety Integrated status displays 'OK' in SINUMERIK Operate.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.5
  },
  {
    "Timestamp": "2026-04-18 05:14:44",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | High Drive Load spike observed up to 54.7% under heavy cutting. | Axis Y11 torque sustained high at 57.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.27
  },
  {
    "Timestamp": "2026-04-17 20:29:34",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 55.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.51
  },
  {
    "Timestamp": "2026-04-15 08:40:44",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Coolant & Filtration",
    "BreakdownType": "Coolant Soil Tank High Level / Sludge Overflow",
    "OEMAlarmCode": "701338 / 701342",
    "Severity": "Medium",
    "PastIncidents": "4 times in last 6 months (Last: 2026-08-19)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-08-19",
    "ProbableReason": "Knoll KF 200 compact filter soil tank level reached high alarm float switch due to high aluminum chip extraction volume and delayed filter fleece indexing.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 57.0C (Warning threshold: 50C). | Spindle current surging to 130.8A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 49.1 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "ActionToFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.29
  },
  {
    "Timestamp": "2026-04-13 19:34:20",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Pre-warning: 4 intermittent FAULT signal pulses detected within 2h prior to stoppage. | High Drive Load spike observed up to 70.0% under heavy cutting. | Axis Y11 torque sustained high at 47.0 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.3
  },
  {
    "Timestamp": "2026-04-10 09:42:34",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: B11-AXIS (MAIN SPINDAL)MOMENT NOT ALLOW",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-04-10)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-04-10",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 3 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | High Drive Load spike observed up to 56.9% under heavy cutting. | Spindle current surging to 20.1A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 64.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.0
  },
  {
    "Timestamp": "2026-04-09 22:30:41",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Coolant & Filtration",
    "BreakdownType": "Coolant Soil Tank High Level / Sludge Overflow",
    "OEMAlarmCode": "701338 / 701342",
    "Severity": "Medium",
    "PastIncidents": "4 times in last 6 months (Last: 2026-08-19)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-08-19",
    "ProbableReason": "Knoll KF 200 compact filter soil tank level reached high alarm float switch due to high aluminum chip extraction volume and delayed filter fleece indexing.",
    "TelemetryLeadingIndicators": "High Drive Load spike observed up to 37.7% under heavy cutting. | Axis Y11 torque sustained high at 66.2 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "ActionToFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.31
  },
  {
    "Timestamp": "2026-04-08 16:53:05",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 53.4 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.28
  },
  {
    "Timestamp": "2026-04-05 23:37:47",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "Main Spindle Tool Clamping / Gripper Mechanism Fault",
    "OEMAlarmCode": "700300 / 700905",
    "Severity": "High",
    "PastIncidents": "4 times in last 6 months (Last: 2026-05-26)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-05-26",
    "ProbableReason": "Tool clamp proximity switch S4 (tool clamped) failed to confirm within time limit, or clamping force deficient due to swarf buildup in HSK taper or worn disc springs.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "ActionToFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 5.0
  },
  {
    "Timestamp": "2026-04-05 02:10:22",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 58.0C (Warning threshold: 50C). | High Drive Load spike observed up to 26.2% under heavy cutting. | Spindle current surging to 33.3A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 48.8 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.33
  },
  {
    "Timestamp": "2026-03-29 15:30:46",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "High",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 57.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 66.0 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-03-27 21:05:07",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Spindle Excessive Vibration / Bearing Acoustic Deterioration",
    "OEMAlarmCode": "700730 / 700731",
    "Severity": "Critical",
    "PastIncidents": "3 times in last 6 months (Last: 2026-06-10)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-06-10",
    "ProbableReason": "SiViB Record 31 spindle vibration monitor exceeded Warning/Alarm threshold (> 2.5 pc / 4.5 mm/s RMS). Root cause: Toolholder unbalance (quality grade worse than ISO 1940 G2.5), spindle bearing cage wear/micro-spalling, or loose HSK-63 clamping segment causing centrifugal flutter.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 55.0C (Warning threshold: 50C). | Spindle current surging to 20.8A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 95.1 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "ActionToFix": "1. Remove current tool and inspect HSK-63 clamping taper for fretting corrosion or chips.\n2. Measure dynamic balancing of tool assembly on balancing machine; rebalance to G2.5 at 24,000 RPM.\n3. Check spindle radial/axial runout using dial indicator (< 0.003 mm at spindle nose taper).\n4. Connect SiViB Record Control software via RS-232/Ethernet to export FFT vibration spectrum and identify bearing defect frequencies (BPFO/BPFI/BSF).\n5. If vibration persists in uncoupled idle test (> 2.0 mm/s), replace spindle bearing cartridge.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.42
  },
  {
    "Timestamp": "2026-03-25 17:32:44",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Axis Drives & Motion",
    "BreakdownType": "Axis Clamping / Hydraulic Holding Brake / Standstill Fault",
    "OEMAlarmCode": "700112 / 700531 / 700109",
    "Severity": "Medium",
    "PastIncidents": "6 times in last 6 months (Last: 2026-09-19)",
    "PastIncidentsCount": 6,
    "LastOccurred": "2026-09-19",
    "ProbableReason": "Rotary axis (C11/A11) or linear axis (Y11) hydraulic line clamp/brake failed to release before axis motion, or axis drifted beyond permissible standstill tolerance window under cutting load.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 47.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "ActionToFix": "1. Inspect hydraulic brake release pressure (check pressure switches and solenoid valve spools).\n2. Verify optical linear scale / rotary encoder purge air pressure (Bavius alarm 700216).\n3. Check guideway lubrication pressure and verify grease distributor metering valves.\n4. Execute axis test stop and brake test sequence in SINUMERIK JOG mode channel 02.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.46
  },
  {
    "Timestamp": "2026-03-19 15:08:06",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Coolant & Filtration",
    "BreakdownType": "Coolant Filter Fleece (Paper) Overuse / End-of-Roll",
    "OEMAlarmCode": "701338 / Knoll KF200",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-03-19)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-03-19",
    "ProbableReason": "Knoll KF 200 filter fleece roll reached end-of-roll limit or drive belt slipped, preventing fresh media advance and causing coolant pooling.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 55.0C (Warning threshold: 50C). | High Drive Load spike observed up to 61.2% under heavy cutting. | Axis Y11 torque sustained high at 48.9 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Replace exhausted filter fleece roll with fresh Knoll specification filtervlies roll (KF 200/1800).\n2. Thread fleece under scraper drum and through drive rollers per diagram 11033782.\n3. Reset fleece run-out limit switch and trigger manual test advance pulse.",
    "ActionToFix": "1. Replace exhausted filter fleece roll with fresh Knoll specification filtervlies roll (KF 200/1800).\n2. Thread fleece under scraper drum and through drive rollers per diagram 11033782.\n3. Reset fleece run-out limit switch and trigger manual test advance pulse.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.58
  },
  {
    "Timestamp": "2026-03-19 16:57:30",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Tool Changer (ATC) & Clamping",
    "BreakdownType": "Main Spindle Tool Clamping / Gripper Mechanism Fault",
    "OEMAlarmCode": "700300 / 700905",
    "Severity": "High",
    "PastIncidents": "4 times in last 6 months (Last: 2026-05-26)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-05-26",
    "ProbableReason": "Tool clamp proximity switch S4 (tool clamped) failed to confirm within time limit, or clamping force deficient due to swarf buildup in HSK taper or worn disc springs.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | High Drive Load spike observed up to 52.9% under heavy cutting. | Axis Y11 torque sustained high at 51.1 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "ActionToFix": "1. Clean spindle internal HSK taper socket and gripper collet segments using specialized cleaning cone.\n2. Measure pull-in force with Ott-Jakob POWER-CHECK instrument (verify against specification table in Chap 7.3.2).\n3. Disassemble gripper segments, lubricate with Kl\u00fcber paste, inspect Belleville springs for cracks.\n4. Readjust proximity switch S4 switching gap (1.0 mm +/- 0.2 mm); test tool clamp/unclamp in JOG.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.0
  },
  {
    "Timestamp": "2026-03-18 12:01:46",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Coolant & Filtration",
    "BreakdownType": "Coolant Soil Tank High Level / Sludge Overflow",
    "OEMAlarmCode": "701338 / 701342",
    "Severity": "Medium",
    "PastIncidents": "4 times in last 6 months (Last: 2026-08-19)",
    "PastIncidentsCount": 4,
    "LastOccurred": "2026-08-19",
    "ProbableReason": "Knoll KF 200 compact filter soil tank level reached high alarm float switch due to high aluminum chip extraction volume and delayed filter fleece indexing.",
    "TelemetryLeadingIndicators": "High Drive Load spike observed up to 48.3% under heavy cutting. | Axis Y11 torque sustained high at 48.1 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "ActionToFix": "1. Empty chip sediment and sludge from dirty coolant soil tank compartment.\n2. Clean float level switches and optical level probes from fine aluminum paste build-up.\n3. Check filter fleece roll advance drive motor and ensure fleece is advancing smoothly without tears.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.32
  },
  {
    "Timestamp": "2026-03-17 09:26:25",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | Axis Y11 torque sustained high at 48.7 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.57
  },
  {
    "Timestamp": "2026-03-16 14:05:37",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pneumatic System",
    "BreakdownType": "Compressed Air Supply Pressure Low (< 6.0 Bar)",
    "OEMAlarmCode": "700121 / 700122",
    "Severity": "Medium",
    "PastIncidents": "12 times in last 6 months (Last: 2026-09-22)",
    "PastIncidentsCount": 12,
    "LastOccurred": "2026-09-22",
    "ProbableReason": "Central pneumatic shop air supply dropped below minimum machine threshold (6.0 bar), or internal distribution line ruptured/leaked, disabling pneumatic tool clamps, sealing air, and axis scales purge.",
    "TelemetryLeadingIndicators": "Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | Spindle current surging to 20.9A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 48.9 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "ActionToFix": "1. Check primary pneumatic service unit pressure gauge [item 8 in manual]; verify supply >= 6.0 bar.\n2. Check auto-drain water separator filter bowl for clogging or excessive condensate.\n3. Listen for air leaks along energy drag chains, Festo valve manifolds, and tool magazine cylinders.\n4. If pipe ruptured, replace 8mm/12mm polyurethane air line and push-in fitting; re-pressurize system.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.3
  },
  {
    "Timestamp": "2026-03-14 02:59:54",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "General Mechanical / Electrical",
    "BreakdownType": "Machine Subsystem Interruption: Bavius 4M1 Mode change is not allowed.",
    "OEMAlarmCode": "700100",
    "Severity": "Medium",
    "PastIncidents": "1 times in last 6 months (Last: 2026-03-14)",
    "PastIncidentsCount": 1,
    "LastOccurred": "2026-03-14",
    "ProbableReason": "Operational cycle halted due to safety interlock trip or sensor feedback disagreement during automated processing.",
    "TelemetryLeadingIndicators": "Pre-warning: 1 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Axis Y11 torque sustained high at 47.5 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "ActionToFix": "1. Check active alarm message on SINUMERIK CNC screen.\n2. Inspect affected mechanical components and proximity switches.\n3. Clear obstruction, reset safety circuit, and resume production.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.3
  },
  {
    "Timestamp": "2026-03-11 16:57:36",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "Pre-warning: 2 intermittent FAULT signal pulses detected within 2h prior to stoppage. | Elevated Spindle Motor Temperature reached 56.0C (Warning threshold: 50C). | High Drive Load spike observed up to 36.8% under heavy cutting. | Spindle current surging to 23.8A (normal idle: 0-2A, normal cut: 7-12A). | Axis Y11 torque sustained high at 50.3 Nm against mechanical drag/brake.",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.29
  },
  {
    "Timestamp": "2026-03-07 07:02:10",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-03-06 07:43:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.0
  },
  {
    "Timestamp": "2026-03-06 15:30:00",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.0
  },
  {
    "Timestamp": "2026-03-06 15:33:35",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Pallet Changer",
    "BreakdownType": "Automatic Pallet Changer (APC) Sequence / Clamping Fault",
    "OEMAlarmCode": "701018 / 701019 / 701033",
    "Severity": "Medium",
    "PastIncidents": "19 times in last 6 months (Last: 2026-09-08)",
    "PastIncidentsCount": 19,
    "LastOccurred": "2026-09-08",
    "ProbableReason": "Pallet change cycle timed out or failed to reach confirmed end position. Swarf/chips on pallet cone seats, misaligned proximity switches on centering cylinders (X/Y), or hydraulic unclamp delay.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "ActionToFix": "1. Thoroughly clean pallet locating taper cones, seating surfaces, and zero-point clamping receivers.\n2. Verify inductive proximity sensor LEDs on centering cylinders X/Y and swivel arm lock pin.\n3. Inspect hydraulic pressure for pallet clamping circuit (small ring / big ring pressure gauges).\n4. Switch to JOG mode and execute pallet recovery sequence per Operating Instructions Section 2.3.\n5. Test pallet change in manual single-block before resuming NC_AUTO.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 2.0
  },
  {
    "Timestamp": "2026-03-05 09:06:55",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "CNC Controller & Panel",
    "BreakdownType": "CNC Control Panel Blinking / CPU Ready Watchdog Interruption",
    "OEMAlarmCode": "700425 / Siemens NCU",
    "Severity": "Medium",
    "PastIncidents": "10 times in last 6 months (Last: 2026-08-16)",
    "PastIncidentsCount": 10,
    "LastOccurred": "2026-08-16",
    "ProbableReason": "24V DC auxiliary power line transient, safety door interlock oscillation, or Sinumerik NCU / PLC CPU watchdog timeout during auto mode transition.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "ActionToFix": "1. Check 24V DC power supply status LEDs (SITOP power units) for overcurrent or voltage sag.\n2. Inspect operator panel emergency stop pushbuttons and key switches for intermittent contacts.\n3. Check Siemens CSM 1277 industrial Ethernet switch connection to decentral ET200 I/O blocks.\n4. Perform controlled CNC warm restart; verify NCU 7-segment display displays status '6' with green RUN LED.",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 1.06
  },
  {
    "Timestamp": "2026-03-04 07:40:22",
    "Machine": "Bavius 4mtr N01-02",
    "EquipmentID": "11000452",
    "Category": "Spindle System",
    "BreakdownType": "Main Spindle SP1 Drive Controller Fault",
    "OEMAlarmCode": "700113 / Siemens 25201",
    "Severity": "High",
    "PastIncidents": "3 times in last 6 months (Last: 2026-07-13)",
    "PastIncidentsCount": 3,
    "LastOccurred": "2026-07-13",
    "ProbableReason": "Siemens Sinumerik drive controller fault on SP1 axis due to following error, speed controller saturation, or encoder signal loss during rapid acceleration.",
    "TelemetryLeadingIndicators": "No abnormal precursor flags logged within 2h window (sudden mechanical/operator trip).",
    "SuggestedFix": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "ActionToFix": "1. Check encoder signal cable and clean optical pulse connector on spindle rear.\n2. Inspect motor power terminal block for loose lugs or thermal discoloration.\n3. Verify spindle drive heat sink fan operation and clean ventilation grilles.\n4. Acknowledge alarm via NC-Reset and perform slow spindle spin-up test (500 -> 3000 -> 10000 RPM).",
    "TimeToBreakdown": "XX:XX hrs",
    "DowntimeHrs": 0.33
  }
];
window.DASHBOARD_TELEMETRY = {
  "daily_trends": [
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 33.857638888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8316040039,
      "BAVIUS_4MTR_driveLoad": 8.241081237792969,
      "BAVIUS_4MTR_aaCurr_SP1": 2.697414822048611,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-03-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.392361111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4038085938,
      "BAVIUS_4MTR_driveLoad": 11.839103698730469,
      "BAVIUS_4MTR_aaCurr_SP1": 5.9803009033203125,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-03-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.09375,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8888244629,
      "BAVIUS_4MTR_driveLoad": 12.70898183186849,
      "BAVIUS_4MTR_aaCurr_SP1": 5.186165703667535,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-03-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.87847222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4610290527,
      "BAVIUS_4MTR_driveLoad": 12.45269775390625,
      "BAVIUS_4MTR_aaCurr_SP1": 4.301749335394965,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-03-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.13194444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.2893676758,
      "BAVIUS_4MTR_driveLoad": 12.772009107801649,
      "BAVIUS_4MTR_aaCurr_SP1": 5.3109486897786455,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-03-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.24305555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.4163513184,
      "BAVIUS_4MTR_driveLoad": 11.941252814398872,
      "BAVIUS_4MTR_aaCurr_SP1": 3.036626180013021,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-03-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.142361111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22001.5525817871,
      "BAVIUS_4MTR_driveLoad": 12.192789713541666,
      "BAVIUS_4MTR_aaCurr_SP1": 4.233000013563368,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-03-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.826388888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27001.8768310547,
      "BAVIUS_4MTR_driveLoad": 10.995610555013021,
      "BAVIUS_4MTR_aaCurr_SP1": 3.97292243109809,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-03-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.90277777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 21003.5133361816,
      "BAVIUS_4MTR_driveLoad": 8.569124009874132,
      "BAVIUS_4MTR_aaCurr_SP1": 3.234736124674479,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-03-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.1029968262,
      "BAVIUS_4MTR_driveLoad": 12.072139316134983,
      "BAVIUS_4MTR_aaCurr_SP1": 3.603363037109375,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-03-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.18402777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.2321472168,
      "BAVIUS_4MTR_driveLoad": 12.962044609917534,
      "BAVIUS_4MTR_aaCurr_SP1": 4.322009616427952,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-03-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 29.49652777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.2021789551,
      "BAVIUS_4MTR_driveLoad": 10.253334045410156,
      "BAVIUS_4MTR_aaCurr_SP1": 1.4280954996744792,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-03-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.8125,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.5182495117,
      "BAVIUS_4MTR_driveLoad": 12.520853678385416,
      "BAVIUS_4MTR_aaCurr_SP1": 6.998994615342882,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-03-20"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.40972222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1749267578,
      "BAVIUS_4MTR_driveLoad": 7.561937967936198,
      "BAVIUS_4MTR_aaCurr_SP1": 4.82894049750434,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-03-21"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.27777777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.3465881348,
      "BAVIUS_4MTR_driveLoad": 8.460617065429688,
      "BAVIUS_4MTR_aaCurr_SP1": 2.58225335015191,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-03-22"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.927083333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.3465881348,
      "BAVIUS_4MTR_driveLoad": 8.895153469509548,
      "BAVIUS_4MTR_aaCurr_SP1": 3.766081068250868,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-03-23"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.291666666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1749267578,
      "BAVIUS_4MTR_driveLoad": 12.571440802680122,
      "BAVIUS_4MTR_aaCurr_SP1": 4.600821601019965,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-03-24"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.44210526315789,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4610290527,
      "BAVIUS_4MTR_driveLoad": 12.102350603070175,
      "BAVIUS_4MTR_aaCurr_SP1": 4.893177768640351,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-03-25"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.65625,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22000.9803771973,
      "BAVIUS_4MTR_driveLoad": 12.304729885525173,
      "BAVIUS_4MTR_aaCurr_SP1": 4.467858208550347,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-03-26"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.989583333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22001.953125,
      "BAVIUS_4MTR_driveLoad": 12.138070000542534,
      "BAVIUS_4MTR_aaCurr_SP1": 3.4644232855902777,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-03-27"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.642361111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 21000.7095336914,
      "BAVIUS_4MTR_driveLoad": 12.122599283854166,
      "BAVIUS_4MTR_aaCurr_SP1": 4.4607798258463545,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-03-28"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.263888888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 21004.7721862793,
      "BAVIUS_4MTR_driveLoad": 12.60475582546658,
      "BAVIUS_4MTR_aaCurr_SP1": 5.313067966037327,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-03-29"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.451388888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26002.1781921387,
      "BAVIUS_4MTR_driveLoad": 12.11488511827257,
      "BAVIUS_4MTR_aaCurr_SP1": 3.864161173502604,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-03-30"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.145833333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.0032653809,
      "BAVIUS_4MTR_driveLoad": 12.766668531629774,
      "BAVIUS_4MTR_aaCurr_SP1": 6.440438164605035,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-03-31"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.31597222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.9760131836,
      "BAVIUS_4MTR_driveLoad": 12.472746107313368,
      "BAVIUS_4MTR_aaCurr_SP1": 6.47031995985243,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-04-01"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.736111111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.0604858398,
      "BAVIUS_4MTR_driveLoad": 12.275526258680555,
      "BAVIUS_4MTR_aaCurr_SP1": 5.414793226453993,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-04-02"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.388888888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4610290527,
      "BAVIUS_4MTR_driveLoad": 12.211354573567709,
      "BAVIUS_4MTR_aaCurr_SP1": 4.898156060112847,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-04-03"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.65625,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.3465881348,
      "BAVIUS_4MTR_driveLoad": 12.233946058485243,
      "BAVIUS_4MTR_aaCurr_SP1": 4.734378390842014,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-04-04"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.11764705882353,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28002.3193359375,
      "BAVIUS_4MTR_driveLoad": 11.255630792356005,
      "BAVIUS_4MTR_aaCurr_SP1": 5.476947859221814,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-04-05"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-04-06"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-04-07"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.12418300653595,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4610290527,
      "BAVIUS_4MTR_driveLoad": 10.90566597732843,
      "BAVIUS_4MTR_aaCurr_SP1": 5.701561223447713,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-04-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.973684210526315,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1749267578,
      "BAVIUS_4MTR_driveLoad": 12.87388048673931,
      "BAVIUS_4MTR_aaCurr_SP1": 5.923381604646382,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-04-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.78125,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8888244629,
      "BAVIUS_4MTR_driveLoad": 12.187512715657553,
      "BAVIUS_4MTR_aaCurr_SP1": 4.593107435438368,
      "BAVIUS_4_MTR_FAULT": 13.0,
      "dt_str": "2026-04-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.21527777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22001.838684082,
      "BAVIUS_4MTR_driveLoad": 11.93841298421224,
      "BAVIUS_4MTR_aaCurr_SP1": 5.870903862847222,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-04-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.56944444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.5035400391,
      "BAVIUS_4MTR_driveLoad": 7.953580220540364,
      "BAVIUS_4MTR_aaCurr_SP1": 2.91290283203125,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-04-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 33.91319444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27001.3046264648,
      "BAVIUS_4MTR_driveLoad": 11.724599202473959,
      "BAVIUS_4MTR_aaCurr_SP1": 2.2622850206163196,
      "BAVIUS_4_MTR_FAULT": 14.0,
      "dt_str": "2026-04-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.88194444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1177062988,
      "BAVIUS_4MTR_driveLoad": 12.51227060953776,
      "BAVIUS_4MTR_aaCurr_SP1": 3.972964816623264,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-04-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.822916666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.9460449219,
      "BAVIUS_4MTR_driveLoad": 12.603780958387587,
      "BAVIUS_4MTR_aaCurr_SP1": 4.5892079671223955,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-04-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.082142857142856,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1177062988,
      "BAVIUS_4MTR_driveLoad": 12.118617466517858,
      "BAVIUS_4MTR_aaCurr_SP1": 4.6307373046875,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-04-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.21180555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.5754699707,
      "BAVIUS_4MTR_driveLoad": 11.01040310329861,
      "BAVIUS_4MTR_aaCurr_SP1": 6.097666422526042,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-04-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.423611111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4038085938,
      "BAVIUS_4MTR_driveLoad": 12.03394995795356,
      "BAVIUS_4MTR_aaCurr_SP1": 5.921766493055555,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-04-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 28.79861111111111,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4610290527,
      "BAVIUS_4MTR_driveLoad": 3.8308037651909723,
      "BAVIUS_4MTR_aaCurr_SP1": 1.5509711371527777,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-04-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.08771929824562,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.5754699707,
      "BAVIUS_4MTR_driveLoad": 11.844311095120615,
      "BAVIUS_4MTR_aaCurr_SP1": 5.059750205592105,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-04-20"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.875,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28002.3193359375,
      "BAVIUS_4MTR_driveLoad": 13.627900017632378,
      "BAVIUS_4MTR_aaCurr_SP1": 5.300818549262153,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-04-21"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.329861111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.5182495117,
      "BAVIUS_4MTR_driveLoad": 12.64430152045356,
      "BAVIUS_4MTR_aaCurr_SP1": 5.7959238688151045,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-04-22"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.03819444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.0604858398,
      "BAVIUS_4MTR_driveLoad": 11.594051784939236,
      "BAVIUS_4MTR_aaCurr_SP1": 3.399997287326389,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-04-23"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.49305555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 6.950166490342882,
      "BAVIUS_4MTR_aaCurr_SP1": 3.6910586886935763,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-04-24"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.80902777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.2321472168,
      "BAVIUS_4MTR_driveLoad": 12.528716193305122,
      "BAVIUS_4MTR_aaCurr_SP1": 5.0942738850911455,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-04-25"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.03,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8316040039,
      "BAVIUS_4MTR_driveLoad": 8.16033935546875,
      "BAVIUS_4MTR_aaCurr_SP1": 3.7646484375,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-04-26"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-04-27"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-04-28"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-04-29"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.464285714285715,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22003.1547546387,
      "BAVIUS_4MTR_driveLoad": 10.573287237258185,
      "BAVIUS_4MTR_aaCurr_SP1": 3.1058175223214284,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-04-30"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 23.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-05-01"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.979166666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27001.4762878418,
      "BAVIUS_4MTR_driveLoad": 8.138423495822483,
      "BAVIUS_4MTR_aaCurr_SP1": 2.29691399468316,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-05-02"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.644444444444446,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20003.8719177246,
      "BAVIUS_4MTR_driveLoad": 9.655626085069445,
      "BAVIUS_4MTR_aaCurr_SP1": 1.9269476996527777,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-05-03"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.675213675213676,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 18003.5018920898,
      "BAVIUS_4MTR_driveLoad": 12.423784304887821,
      "BAVIUS_4MTR_aaCurr_SP1": 1.1032234909188035,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-05-04"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.8125,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.0730285645,
      "BAVIUS_4MTR_driveLoad": 12.478171454535591,
      "BAVIUS_4MTR_aaCurr_SP1": 3.871027628580729,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-05-05"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.895833333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22003.4408569336,
      "BAVIUS_4MTR_driveLoad": 12.656148274739584,
      "BAVIUS_4MTR_aaCurr_SP1": 3.02276611328125,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-05-06"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.49652777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26997.9286193848,
      "BAVIUS_4MTR_driveLoad": 12.209807501898872,
      "BAVIUS_4MTR_aaCurr_SP1": 3.7883758544921875,
      "BAVIUS_4_MTR_FAULT": 13.0,
      "dt_str": "2026-05-07"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.56944444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.3591308594,
      "BAVIUS_4MTR_driveLoad": 12.864282396104601,
      "BAVIUS_4MTR_aaCurr_SP1": 3.960757785373264,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-05-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.1875,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22000.0648498535,
      "BAVIUS_4MTR_driveLoad": 10.148175557454428,
      "BAVIUS_4MTR_aaCurr_SP1": 4.049258761935764,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-05-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 25.149305555555557,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27001.1901855469,
      "BAVIUS_4MTR_driveLoad": 2.443334791395399,
      "BAVIUS_4MTR_aaCurr_SP1": 0.24325052897135416,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-05-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 25.805555555555557,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22003.3264160156,
      "BAVIUS_4MTR_driveLoad": 4.21189202202691,
      "BAVIUS_4MTR_aaCurr_SP1": 0.08650885687934028,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-05-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.97569444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8888244629,
      "BAVIUS_4MTR_driveLoad": 11.881510416666666,
      "BAVIUS_4MTR_aaCurr_SP1": 3.0375162760416665,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-05-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.958333333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.0032653809,
      "BAVIUS_4MTR_driveLoad": 12.583520677354601,
      "BAVIUS_4MTR_aaCurr_SP1": 4.773373074001736,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-05-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.510416666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27999.8588562012,
      "BAVIUS_4MTR_driveLoad": 13.108020358615452,
      "BAVIUS_4MTR_aaCurr_SP1": 5.689917670355903,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-05-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.99652777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28002.8343200684,
      "BAVIUS_4MTR_driveLoad": 12.481774224175346,
      "BAVIUS_4MTR_aaCurr_SP1": 6.91269768608941,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-05-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.34027777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.9460449219,
      "BAVIUS_4MTR_driveLoad": 12.100664774576822,
      "BAVIUS_4MTR_aaCurr_SP1": 6.57899644639757,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-05-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.951388888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8888244629,
      "BAVIUS_4MTR_driveLoad": 12.61073218451606,
      "BAVIUS_4MTR_aaCurr_SP1": 5.7837168375651045,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-05-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.69444444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.3465881348,
      "BAVIUS_4MTR_driveLoad": 11.537975735134548,
      "BAVIUS_4MTR_aaCurr_SP1": 4.959869384765625,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-05-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.388888888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.8615722656,
      "BAVIUS_4MTR_driveLoad": 11.063173082139757,
      "BAVIUS_4MTR_aaCurr_SP1": 4.36965094672309,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-05-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.94385964912281,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1749267578,
      "BAVIUS_4MTR_driveLoad": 12.581958436129385,
      "BAVIUS_4MTR_aaCurr_SP1": 6.601605331688597,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-05-20"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.83680555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4038085938,
      "BAVIUS_4MTR_driveLoad": 12.32113308376736,
      "BAVIUS_4MTR_aaCurr_SP1": 6.08274671766493,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-05-21"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.513888888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.2321472168,
      "BAVIUS_4MTR_driveLoad": 12.097740173339844,
      "BAVIUS_4MTR_aaCurr_SP1": 6.1100006103515625,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-05-22"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.420138888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.4038085938,
      "BAVIUS_4MTR_driveLoad": 13.033379448784721,
      "BAVIUS_4MTR_aaCurr_SP1": 6.090545654296875,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-05-23"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.36220472440945,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.2321472168,
      "BAVIUS_4MTR_driveLoad": 12.140805702509843,
      "BAVIUS_4MTR_aaCurr_SP1": 5.950014609990157,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-05-24"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.25925925925926,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.545501709,
      "BAVIUS_4MTR_driveLoad": 11.606852213541666,
      "BAVIUS_4MTR_aaCurr_SP1": 5.930130570023148,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-05-25"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.576388888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.7471313477,
      "BAVIUS_4MTR_driveLoad": 11.832788255479601,
      "BAVIUS_4MTR_aaCurr_SP1": 5.407418145073785,
      "BAVIUS_4_MTR_FAULT": 15.0,
      "dt_str": "2026-05-26"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 23.291666666666668,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.3019104004,
      "BAVIUS_4MTR_driveLoad": 5.377621120876736,
      "BAVIUS_4MTR_aaCurr_SP1": 0.025473700629340276,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-05-27"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 22.927083333333332,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 3.1260384453667536,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-05-28"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 23.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-05-29"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 22.958333333333332,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 4.586580064561632,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-05-30"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 22.8125,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 6.8136850992838545,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-05-31"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 1282524912.8784723,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 5.55038452148438,
      "BAVIUS_4MTR_driveLoad": 2.155197991265191,
      "BAVIUS_4MTR_aaCurr_SP1": -0.007120768229166667,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-06-01"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 2430832083.454861,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 101.337432861328,
      "BAVIUS_4MTR_driveLoad": 2.3838678995768228,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0057220458984375,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-06-02"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 25.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-06-03"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.15568862275449,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20000.7247924805,
      "BAVIUS_4MTR_driveLoad": 11.014835563248504,
      "BAVIUS_4MTR_aaCurr_SP1": 0.2738906951721557,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-06-04"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.23611111111111,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.373840332,
      "BAVIUS_4MTR_driveLoad": 11.825688680013021,
      "BAVIUS_4MTR_aaCurr_SP1": 1.0039011637369792,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-06-05"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.71875,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.1449584961,
      "BAVIUS_4MTR_driveLoad": 11.49226294623481,
      "BAVIUS_4MTR_aaCurr_SP1": 1.6116672092013888,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-06-06"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.821862348178136,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26000.5760192871,
      "BAVIUS_4MTR_driveLoad": 11.06475953631073,
      "BAVIUS_4MTR_aaCurr_SP1": 5.61019341472672,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-06-07"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.260416666666668,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.1602172852,
      "BAVIUS_4MTR_driveLoad": 3.130806816948785,
      "BAVIUS_4MTR_aaCurr_SP1": 0.7076263427734375,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-06-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.584795321637426,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.8168945313,
      "BAVIUS_4MTR_driveLoad": 6.70690703810307,
      "BAVIUS_4MTR_aaCurr_SP1": 0.1213564510233918,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-06-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.88202247191011,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 11.216581537482444,
      "BAVIUS_4MTR_aaCurr_SP1": 1.8416844057233146,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-06-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.93402777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.0877380371,
      "BAVIUS_4MTR_driveLoad": 12.433497111002604,
      "BAVIUS_4MTR_aaCurr_SP1": 3.60916985405816,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-06-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.7410071942446,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25001.163482666,
      "BAVIUS_4MTR_driveLoad": 13.039963536982913,
      "BAVIUS_4MTR_aaCurr_SP1": 1.2000653383543165,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-06-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-06-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.385714285714286,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.431060791,
      "BAVIUS_4MTR_driveLoad": 11.721888950892858,
      "BAVIUS_4MTR_aaCurr_SP1": 0.05876813616071429,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-06-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.97569444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8888244629,
      "BAVIUS_4MTR_driveLoad": 11.98054419623481,
      "BAVIUS_4MTR_aaCurr_SP1": 4.57000732421875,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-06-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.25694444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7171630859,
      "BAVIUS_4MTR_driveLoad": 13.141844007703993,
      "BAVIUS_4MTR_aaCurr_SP1": 5.883280436197917,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-06-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.708333333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.545501709,
      "BAVIUS_4MTR_driveLoad": 12.39677005343967,
      "BAVIUS_4MTR_aaCurr_SP1": 3.2526652018229165,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-06-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.701388888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28002.2048950195,
      "BAVIUS_4MTR_driveLoad": 12.085130479600695,
      "BAVIUS_4MTR_aaCurr_SP1": 3.904385036892361,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-06-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.30555555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.659942627,
      "BAVIUS_4MTR_driveLoad": 12.147967020670572,
      "BAVIUS_4MTR_aaCurr_SP1": 4.04099358452691,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-06-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.517361111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.48828125,
      "BAVIUS_4MTR_driveLoad": 12.97090318467882,
      "BAVIUS_4MTR_aaCurr_SP1": 5.799908108181423,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-06-20"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.545138888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.48828125,
      "BAVIUS_4MTR_driveLoad": 13.090133666992188,
      "BAVIUS_4MTR_aaCurr_SP1": 5.40207756890191,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-06-21"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.923611111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.373840332,
      "BAVIUS_4MTR_driveLoad": 12.163607279459635,
      "BAVIUS_4MTR_aaCurr_SP1": 5.1532745361328125,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-06-22"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.607638888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.431060791,
      "BAVIUS_4MTR_driveLoad": 12.453503078884548,
      "BAVIUS_4MTR_aaCurr_SP1": 6.393178304036458,
      "BAVIUS_4_MTR_FAULT": 8.0,
      "dt_str": "2026-06-23"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.86805555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.659942627,
      "BAVIUS_4MTR_driveLoad": 12.596236334906685,
      "BAVIUS_4MTR_aaCurr_SP1": 6.622568766276042,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-06-24"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.28472222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.545501709,
      "BAVIUS_4MTR_driveLoad": 12.044991387261284,
      "BAVIUS_4MTR_aaCurr_SP1": 6.0100555419921875,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-06-25"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.982638888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.373840332,
      "BAVIUS_4MTR_driveLoad": 11.609522501627604,
      "BAVIUS_4MTR_aaCurr_SP1": 5.792744954427083,
      "BAVIUS_4_MTR_FAULT": 17.0,
      "dt_str": "2026-06-26"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.90277777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7171630859,
      "BAVIUS_4MTR_driveLoad": 11.272366841634115,
      "BAVIUS_4MTR_aaCurr_SP1": 4.826651679144965,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-06-27"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.84027777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.48828125,
      "BAVIUS_4MTR_driveLoad": 11.22402615017361,
      "BAVIUS_4MTR_aaCurr_SP1": 3.5995059543185763,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-06-28"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 33.072916666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26000.0610351563,
      "BAVIUS_4MTR_driveLoad": 11.440467834472656,
      "BAVIUS_4MTR_aaCurr_SP1": 3.0861748589409723,
      "BAVIUS_4_MTR_FAULT": 3.0,
      "dt_str": "2026-06-29"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.52777777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.3890991211,
      "BAVIUS_4MTR_driveLoad": 11.606068081325954,
      "BAVIUS_4MTR_aaCurr_SP1": 4.1182200113932295,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-06-30"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.22222222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22501.0871887207,
      "BAVIUS_4MTR_driveLoad": 12.064637078179253,
      "BAVIUS_4MTR_aaCurr_SP1": 4.976993136935764,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-07-01"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.135416666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22501.0299682617,
      "BAVIUS_4MTR_driveLoad": 11.762491861979166,
      "BAVIUS_4MTR_aaCurr_SP1": 4.701995849609375,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-07-02"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.795138888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26000.2326965332,
      "BAVIUS_4MTR_driveLoad": 11.641120910644531,
      "BAVIUS_4MTR_aaCurr_SP1": 6.154378255208333,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-07-03"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.048611111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.3890991211,
      "BAVIUS_4MTR_driveLoad": 12.267642550998264,
      "BAVIUS_4MTR_aaCurr_SP1": 3.6573621961805554,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-07-04"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.93333333333333,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.0457763672,
      "BAVIUS_4MTR_driveLoad": 12.42698386863426,
      "BAVIUS_4MTR_aaCurr_SP1": 6.05785228587963,
      "BAVIUS_4_MTR_FAULT": 2.0,
      "dt_str": "2026-07-05"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-07-06"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-07-07"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-07-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 2692367439.8905473,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 498.96240234375,
      "BAVIUS_4MTR_driveLoad": 1.92373095460199,
      "BAVIUS_4MTR_aaCurr_SP1": -0.004554862406716418,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-07-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.583333333333332,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 2999.83978271484,
      "BAVIUS_4MTR_driveLoad": 3.1310823228624134,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0036027696397569445,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-07-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.43055555555556,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 21999.4354248047,
      "BAVIUS_4MTR_driveLoad": 11.13791995578342,
      "BAVIUS_4MTR_aaCurr_SP1": 0.1739501953125,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-07-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.87152777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.431060791,
      "BAVIUS_4MTR_driveLoad": 11.812316046820747,
      "BAVIUS_4MTR_aaCurr_SP1": 1.3438754611545138,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-07-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.239583333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8888244629,
      "BAVIUS_4MTR_driveLoad": 11.193211873372396,
      "BAVIUS_4MTR_aaCurr_SP1": 1.1388990614149306,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-07-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.15625,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.2593994141,
      "BAVIUS_4MTR_driveLoad": 10.444026523166233,
      "BAVIUS_4MTR_aaCurr_SP1": 2.63565911187066,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-07-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 28.25347222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.5035400391,
      "BAVIUS_4MTR_driveLoad": 5.545001559787327,
      "BAVIUS_4MTR_aaCurr_SP1": 0.10897318522135417,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-07-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.739583333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.431060791,
      "BAVIUS_4MTR_driveLoad": 11.935191684299046,
      "BAVIUS_4MTR_aaCurr_SP1": 3.0381944444444446,
      "BAVIUS_4_MTR_FAULT": 7.0,
      "dt_str": "2026-07-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.9375,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.7024536133,
      "BAVIUS_4MTR_driveLoad": 12.456152174207899,
      "BAVIUS_4MTR_aaCurr_SP1": 3.8475460476345487,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-07-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.170138888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7171630859,
      "BAVIUS_4MTR_driveLoad": 11.97350819905599,
      "BAVIUS_4MTR_aaCurr_SP1": 5.242241753472222,
      "BAVIUS_4_MTR_FAULT": 12.0,
      "dt_str": "2026-07-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.791666666666664,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 12.323104010687935,
      "BAVIUS_4MTR_aaCurr_SP1": 3.5825941297743054,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-07-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.34265734265734,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1177062988,
      "BAVIUS_4MTR_driveLoad": 12.317449396306818,
      "BAVIUS_4MTR_aaCurr_SP1": 7.183240343640734,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-07-20"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.27777777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.0032653809,
      "BAVIUS_4MTR_driveLoad": 12.435277303059896,
      "BAVIUS_4MTR_aaCurr_SP1": 5.418565538194445,
      "BAVIUS_4_MTR_FAULT": 16.0,
      "dt_str": "2026-07-21"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.49469964664311,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 11.667269110258392,
      "BAVIUS_4MTR_aaCurr_SP1": 6.34243698928887,
      "BAVIUS_4_MTR_FAULT": 26.0,
      "dt_str": "2026-07-22"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.014218009478675,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7743835449,
      "BAVIUS_4MTR_driveLoad": 12.2354082586641,
      "BAVIUS_4MTR_aaCurr_SP1": 6.127119742298579,
      "BAVIUS_4_MTR_FAULT": 19.0,
      "dt_str": "2026-07-23"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.3741935483871,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 12.846482799899194,
      "BAVIUS_4MTR_aaCurr_SP1": 7.184113533266129,
      "BAVIUS_4_MTR_FAULT": 14.0,
      "dt_str": "2026-07-24"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.12152777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.0604858398,
      "BAVIUS_4MTR_driveLoad": 11.377037896050346,
      "BAVIUS_4MTR_aaCurr_SP1": 5.781639946831597,
      "BAVIUS_4_MTR_FAULT": 35.0,
      "dt_str": "2026-07-25"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.611111111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7171630859,
      "BAVIUS_4MTR_driveLoad": 13.06915283203125,
      "BAVIUS_4MTR_aaCurr_SP1": 6.473753187391493,
      "BAVIUS_4_MTR_FAULT": 36.0,
      "dt_str": "2026-07-26"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.3006993006993,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.659942627,
      "BAVIUS_4MTR_driveLoad": 11.960073617788462,
      "BAVIUS_4MTR_aaCurr_SP1": 5.488554414335664,
      "BAVIUS_4_MTR_FAULT": 19.0,
      "dt_str": "2026-07-27"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.556338028169016,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.659942627,
      "BAVIUS_4MTR_driveLoad": 8.602969747194102,
      "BAVIUS_4MTR_aaCurr_SP1": 3.6896181778169015,
      "BAVIUS_4_MTR_FAULT": 14.0,
      "dt_str": "2026-07-28"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.59471365638767,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 5.274432346159141,
      "BAVIUS_4MTR_aaCurr_SP1": 2.617090704157489,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-07-29"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 51.37847222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8316040039,
      "BAVIUS_4MTR_driveLoad": 12.009620666503906,
      "BAVIUS_4MTR_aaCurr_SP1": 6.395806206597222,
      "BAVIUS_4_MTR_FAULT": 21.0,
      "dt_str": "2026-07-30"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.140845070422536,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 11.920832244443222,
      "BAVIUS_4MTR_aaCurr_SP1": 6.071149799185739,
      "BAVIUS_4_MTR_FAULT": 20.0,
      "dt_str": "2026-07-31"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.269503546099294,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.545501709,
      "BAVIUS_4MTR_driveLoad": 13.191277253712324,
      "BAVIUS_4MTR_aaCurr_SP1": 6.993893021387412,
      "BAVIUS_4_MTR_FAULT": 24.0,
      "dt_str": "2026-08-01"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.1875,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.431060791,
      "BAVIUS_4MTR_driveLoad": 11.958270602756077,
      "BAVIUS_4MTR_aaCurr_SP1": 5.126995510525173,
      "BAVIUS_4_MTR_FAULT": 22.0,
      "dt_str": "2026-08-02"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.25347222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.6899108887,
      "BAVIUS_4MTR_driveLoad": 12.487814161512587,
      "BAVIUS_4MTR_aaCurr_SP1": 4.604297214084202,
      "BAVIUS_4_MTR_FAULT": 21.0,
      "dt_str": "2026-08-03"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.020833333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7743835449,
      "BAVIUS_4MTR_driveLoad": 12.242232428656685,
      "BAVIUS_4MTR_aaCurr_SP1": 4.659695095486111,
      "BAVIUS_4_MTR_FAULT": 15.0,
      "dt_str": "2026-08-04"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.44444444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 21008.6631774902,
      "BAVIUS_4MTR_driveLoad": 11.739709642198351,
      "BAVIUS_4MTR_aaCurr_SP1": 9.02370876736111,
      "BAVIUS_4_MTR_FAULT": 22.0,
      "dt_str": "2026-08-05"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.454861111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.1602172852,
      "BAVIUS_4MTR_driveLoad": 12.236298455132378,
      "BAVIUS_4MTR_aaCurr_SP1": 5.642191569010417,
      "BAVIUS_4_MTR_FAULT": 18.0,
      "dt_str": "2026-08-06"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.07971014492754,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.904083252,
      "BAVIUS_4MTR_driveLoad": 11.339469577955162,
      "BAVIUS_4MTR_aaCurr_SP1": 3.9133707682291665,
      "BAVIUS_4_MTR_FAULT": 21.0,
      "dt_str": "2026-08-07"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.02608695652174,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26999.6452331543,
      "BAVIUS_4MTR_driveLoad": 12.204377547554348,
      "BAVIUS_4MTR_aaCurr_SP1": 2.097592561141304,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-08-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.995049504950494,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26020.8320617676,
      "BAVIUS_4MTR_driveLoad": 11.566041247679456,
      "BAVIUS_4MTR_aaCurr_SP1": 4.8492733794863865,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-08-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.58490566037736,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26000.1182556152,
      "BAVIUS_4MTR_driveLoad": 11.543475456957546,
      "BAVIUS_4MTR_aaCurr_SP1": 4.331653522995283,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-08-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.482638888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25999.4888305664,
      "BAVIUS_4MTR_driveLoad": 11.981964111328125,
      "BAVIUS_4MTR_aaCurr_SP1": 3.670289781358507,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-08-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.24652777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25999.8893737793,
      "BAVIUS_4MTR_driveLoad": 11.739285786946615,
      "BAVIUS_4MTR_aaCurr_SP1": 9.278233846028646,
      "BAVIUS_4_MTR_FAULT": 20.0,
      "dt_str": "2026-08-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.49652777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 26000.4615783691,
      "BAVIUS_4MTR_driveLoad": 11.68770260281033,
      "BAVIUS_4MTR_aaCurr_SP1": 10.533438788519966,
      "BAVIUS_4_MTR_FAULT": 16.0,
      "dt_str": "2026-08-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.052083333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25999.7177124023,
      "BAVIUS_4MTR_driveLoad": 12.169329325358072,
      "BAVIUS_4MTR_aaCurr_SP1": 8.176464504665798,
      "BAVIUS_4_MTR_FAULT": 9.0,
      "dt_str": "2026-08-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.170138888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25999.5460510254,
      "BAVIUS_4MTR_driveLoad": 2.6634640163845487,
      "BAVIUS_4MTR_aaCurr_SP1": 1.6064537896050348,
      "BAVIUS_4_MTR_FAULT": 10.0,
      "dt_str": "2026-08-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.96052631578947,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23015.3274536133,
      "BAVIUS_4MTR_driveLoad": 5.52010787160773,
      "BAVIUS_4MTR_aaCurr_SP1": 3.7847418534128288,
      "BAVIUS_4_MTR_FAULT": 14.0,
      "dt_str": "2026-08-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.401785714285715,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.1749267578,
      "BAVIUS_4MTR_driveLoad": 12.361090523856026,
      "BAVIUS_4MTR_aaCurr_SP1": 4.234749930245536,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-08-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.03819444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8316040039,
      "BAVIUS_4MTR_driveLoad": 12.645467122395834,
      "BAVIUS_4MTR_aaCurr_SP1": 6.731372409396702,
      "BAVIUS_4_MTR_FAULT": 23.0,
      "dt_str": "2026-08-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.864583333333336,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7743835449,
      "BAVIUS_4MTR_driveLoad": 12.575531005859375,
      "BAVIUS_4MTR_aaCurr_SP1": 5.970552232530382,
      "BAVIUS_4_MTR_FAULT": 30.0,
      "dt_str": "2026-08-20"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.076388888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.9460449219,
      "BAVIUS_4MTR_driveLoad": 5.420282151963976,
      "BAVIUS_4MTR_aaCurr_SP1": 2.4756537543402777,
      "BAVIUS_4_MTR_FAULT": 13.0,
      "dt_str": "2026-08-21"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-22"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-23"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-24"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-25"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-26"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-27"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-28"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-08-29"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.73263888888889,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25199.7184753418,
      "BAVIUS_4MTR_driveLoad": 1.5856636895073786,
      "BAVIUS_4MTR_aaCurr_SP1": 0.26702880859375,
      "BAVIUS_4_MTR_FAULT": 1.0,
      "dt_str": "2026-08-30"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.09027777777778,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25201.0345458984,
      "BAVIUS_4MTR_driveLoad": 12.112575107150608,
      "BAVIUS_4MTR_aaCurr_SP1": 4.651048448350695,
      "BAVIUS_4_MTR_FAULT": 28.0,
      "dt_str": "2026-08-31"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.56597222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25200.8628845215,
      "BAVIUS_4MTR_driveLoad": 11.885197957356771,
      "BAVIUS_4MTR_aaCurr_SP1": 3.756290011935764,
      "BAVIUS_4_MTR_FAULT": 28.0,
      "dt_str": "2026-09-01"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.482394366197184,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25201.6067504883,
      "BAVIUS_4MTR_driveLoad": 12.759915204115316,
      "BAVIUS_4MTR_aaCurr_SP1": 4.989194198393486,
      "BAVIUS_4_MTR_FAULT": 27.0,
      "dt_str": "2026-09-02"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.736111111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25201.1489868164,
      "BAVIUS_4MTR_driveLoad": 13.097000122070312,
      "BAVIUS_4MTR_aaCurr_SP1": 7.112545437282986,
      "BAVIUS_4_MTR_FAULT": 25.0,
      "dt_str": "2026-09-03"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.56944444444444,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25201.3778686523,
      "BAVIUS_4MTR_driveLoad": 12.025939093695747,
      "BAVIUS_4MTR_aaCurr_SP1": 4.713016086154514,
      "BAVIUS_4_MTR_FAULT": 22.0,
      "dt_str": "2026-09-04"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.795138888888886,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25201.3778686523,
      "BAVIUS_4MTR_driveLoad": 12.151124742296007,
      "BAVIUS_4MTR_aaCurr_SP1": 5.72145250108507,
      "BAVIUS_4_MTR_FAULT": 28.0,
      "dt_str": "2026-09-05"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.193548387096776,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 25201.3206481934,
      "BAVIUS_4MTR_driveLoad": 10.546038227696572,
      "BAVIUS_4MTR_aaCurr_SP1": 4.207094254032258,
      "BAVIUS_4_MTR_FAULT": 6.0,
      "dt_str": "2026-09-06"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-09-07"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-09-08"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-09-09"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-09-10"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 17.6875,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.659942627,
      "BAVIUS_4MTR_driveLoad": 4.587597317165798,
      "BAVIUS_4MTR_aaCurr_SP1": 2.193874782986111,
      "BAVIUS_4_MTR_FAULT": 11.0,
      "dt_str": "2026-09-11"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.21888412017167,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.8316040039,
      "BAVIUS_4MTR_driveLoad": 11.676627883583691,
      "BAVIUS_4MTR_aaCurr_SP1": 4.670734978540772,
      "BAVIUS_4_MTR_FAULT": 15.0,
      "dt_str": "2026-09-12"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.62847222222222,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28001.3465881348,
      "BAVIUS_4MTR_driveLoad": 9.701961941189236,
      "BAVIUS_4MTR_aaCurr_SP1": 5.142720540364583,
      "BAVIUS_4_MTR_FAULT": 28.0,
      "dt_str": "2026-09-13"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-09-14"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.892361111111114,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.602722168,
      "BAVIUS_4MTR_driveLoad": 9.050072564019096,
      "BAVIUS_4MTR_aaCurr_SP1": 4.568311903211805,
      "BAVIUS_4_MTR_FAULT": 16.0,
      "dt_str": "2026-09-15"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.88957055214724,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.2021789551,
      "BAVIUS_4MTR_driveLoad": 12.332771160851227,
      "BAVIUS_4MTR_aaCurr_SP1": 6.252770921203988,
      "BAVIUS_4_MTR_FAULT": 14.0,
      "dt_str": "2026-09-16"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0,
      "dt_str": "2026-09-17"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 28.05586592178771,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.9836425781,
      "BAVIUS_4MTR_driveLoad": 7.34778036618366,
      "BAVIUS_4MTR_aaCurr_SP1": 0.25539291637569833,
      "BAVIUS_4_MTR_FAULT": 4.0,
      "dt_str": "2026-09-18"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 45.0625,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.0305175781,
      "BAVIUS_4MTR_driveLoad": 11.621814303927952,
      "BAVIUS_4MTR_aaCurr_SP1": 3.8666195339626737,
      "BAVIUS_4_MTR_FAULT": 23.0,
      "dt_str": "2026-09-19"
    },
    {
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.18279569892473,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 28000.7171630859,
      "BAVIUS_4MTR_driveLoad": 11.609017977150538,
      "BAVIUS_4MTR_aaCurr_SP1": 3.743227066532258,
      "BAVIUS_4_MTR_FAULT": 5.0,
      "dt_str": "2026-09-20"
    }
  ],
  "sep_incident": [
    {
      "dt_str": "2026-09-19 12:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 59.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20000.4386901855,
      "BAVIUS_4MTR_driveLoad": 13.623046875,
      "BAVIUS_4MTR_aaCurr_SP1": 8.0810546875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 12:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 11998.6152648926,
      "BAVIUS_4MTR_driveLoad": 1.94091796875,
      "BAVIUS_4MTR_aaCurr_SP1": 6.75048828125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 12:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 13.41552734375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 13:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.2397766113,
      "BAVIUS_4MTR_driveLoad": 13.2568359375,
      "BAVIUS_4MTR_aaCurr_SP1": 8.26416015625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 13:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 58.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20000.3814697266,
      "BAVIUS_4MTR_driveLoad": 17.022705078125,
      "BAVIUS_4MTR_aaCurr_SP1": 8.36181640625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 14:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.70654296875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 14:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 60.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.2969970703,
      "BAVIUS_4MTR_driveLoad": 8.123779296875,
      "BAVIUS_4MTR_aaCurr_SP1": 8.1298828125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 14:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 13.19580078125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 15:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 28.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 15:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 16:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 61.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.0108947754,
      "BAVIUS_4MTR_driveLoad": 14.532470703125,
      "BAVIUS_4MTR_aaCurr_SP1": 8.10546875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 16:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 6999.72152709961,
      "BAVIUS_4MTR_driveLoad": 16.9189453125,
      "BAVIUS_4MTR_aaCurr_SP1": 16.02783203125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 17:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 51.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 19998.4931945801,
      "BAVIUS_4MTR_driveLoad": 7.672119140625,
      "BAVIUS_4MTR_aaCurr_SP1": 8.5205078125,
      "BAVIUS_4_MTR_FAULT": 1.0
    },
    {
      "dt_str": "2026-09-19 17:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 58.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20000.9536743164,
      "BAVIUS_4MTR_driveLoad": 14.07470703125,
      "BAVIUS_4MTR_aaCurr_SP1": 7.70263671875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 17:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.68212890625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 18:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 55.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 19998.4931945801,
      "BAVIUS_4MTR_driveLoad": 12.92724609375,
      "BAVIUS_4MTR_aaCurr_SP1": 8.544921875,
      "BAVIUS_4_MTR_FAULT": 1.0
    },
    {
      "dt_str": "2026-09-19 18:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 60.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20000.6103515625,
      "BAVIUS_4MTR_driveLoad": 9.21630859375,
      "BAVIUS_4MTR_aaCurr_SP1": 7.470703125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 19:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.8154296875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 19:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 58.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20000.3242492676,
      "BAVIUS_4MTR_driveLoad": 12.8662109375,
      "BAVIUS_4MTR_aaCurr_SP1": 8.1298828125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 19:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 60.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 19998.4359741211,
      "BAVIUS_4MTR_driveLoad": 13.104248046875,
      "BAVIUS_4MTR_aaCurr_SP1": 7.94677734375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 20:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 9998.6457824707,
      "BAVIUS_4MTR_driveLoad": 72.3388671875,
      "BAVIUS_4MTR_aaCurr_SP1": 8.8623046875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 20:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.419677734375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 21:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.70556640625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 21:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 54.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.5830993652,
      "BAVIUS_4MTR_driveLoad": 9.75341796875,
      "BAVIUS_4MTR_aaCurr_SP1": 8.63037109375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 22:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 58.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 3500.69046020508,
      "BAVIUS_4MTR_driveLoad": 1.35498046875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.29296875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 22:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.945556640625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 22:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.92724609375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 23:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 59.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 19999.2370605469,
      "BAVIUS_4MTR_driveLoad": 13.4033203125,
      "BAVIUS_4MTR_aaCurr_SP1": 7.92236328125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-19 23:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.530517578125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 00:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 30.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 4998.95095825195,
      "BAVIUS_4MTR_driveLoad": 12.353515625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.8056640625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 00:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 57.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.1825561523,
      "BAVIUS_4MTR_driveLoad": 13.848876953125,
      "BAVIUS_4MTR_aaCurr_SP1": 8.349609375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 00:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 55.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.528564453125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.54931640625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 01:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.846923828125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 01:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.567138671875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 02:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 5000.78201293945,
      "BAVIUS_4MTR_driveLoad": 10.931396484375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.23193359375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 02:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.12060546875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 1.0
    },
    {
      "dt_str": "2026-09-20 03:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22998.9624023438,
      "BAVIUS_4MTR_driveLoad": 41.766357421875,
      "BAVIUS_4MTR_aaCurr_SP1": 8.31298828125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 03:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 59.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 20001.2969970703,
      "BAVIUS_4MTR_driveLoad": 11.87744140625,
      "BAVIUS_4MTR_aaCurr_SP1": 10.07080078125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 03:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 58.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23001.3084411621,
      "BAVIUS_4MTR_driveLoad": 9.619140625,
      "BAVIUS_4MTR_aaCurr_SP1": 7.01904296875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 04:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 59.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.181640625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 04:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.80322265625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 05:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 5000.26702880859,
      "BAVIUS_4MTR_driveLoad": 12.6220703125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.1220703125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 05:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 4999.75204467773,
      "BAVIUS_4MTR_driveLoad": 11.63330078125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.1708984375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 05:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 55.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23007.7171325684,
      "BAVIUS_4MTR_driveLoad": 7.867431640625,
      "BAVIUS_4MTR_aaCurr_SP1": 28.955078125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 06:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 57.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22999.5346069336,
      "BAVIUS_4MTR_driveLoad": 15.6005859375,
      "BAVIUS_4MTR_aaCurr_SP1": 6.982421875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 06:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 11998.8441467285,
      "BAVIUS_4MTR_driveLoad": 14.117431640625,
      "BAVIUS_4MTR_aaCurr_SP1": 10.3271484375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 26.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.94970703125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:34",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:35",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:36",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:38",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 07:39",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:13",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:14",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:15",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:16",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:18",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:19",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:20",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-09-20 09:21",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 0.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    }
  ],
  "july_incident": [
    {
      "dt_str": "2026-07-05 06:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 39.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 4999.06539916992,
      "BAVIUS_4MTR_driveLoad": 11.29150390625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.03662109375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 33.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.26806640625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.396240234375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.24365234375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.4755859375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.567138671875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.1572265625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.31689453125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.59765625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.4990234375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.4267578125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 06:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.615966796875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 13.1103515625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.968017578125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 27.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 42.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 27000.0457763672,
      "BAVIUS_4MTR_driveLoad": 12.445068359375,
      "BAVIUS_4MTR_aaCurr_SP1": 6.93359375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22999.3629455566,
      "BAVIUS_4MTR_driveLoad": 14.288330078125,
      "BAVIUS_4MTR_aaCurr_SP1": 7.70263671875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 52.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.1068115234,
      "BAVIUS_4MTR_driveLoad": 16.30859375,
      "BAVIUS_4MTR_aaCurr_SP1": 26.6357421875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 17999.9542236328,
      "BAVIUS_4MTR_driveLoad": 12.261962890625,
      "BAVIUS_4MTR_aaCurr_SP1": 7.51953125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 53.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 17998.8098144531,
      "BAVIUS_4MTR_driveLoad": 9.698486328125,
      "BAVIUS_4MTR_aaCurr_SP1": 7.51953125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 43.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.395263671875,
      "BAVIUS_4MTR_aaCurr_SP1": -0.01220703125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.419677734375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.274169921875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 07:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 41.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.4501342773,
      "BAVIUS_4MTR_driveLoad": 7.281494140625,
      "BAVIUS_4MTR_aaCurr_SP1": 7.89794921875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.5645751953,
      "BAVIUS_4MTR_driveLoad": 11.370849609375,
      "BAVIUS_4MTR_aaCurr_SP1": 6.982421875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.9651184082,
      "BAVIUS_4MTR_driveLoad": 12.762451171875,
      "BAVIUS_4MTR_aaCurr_SP1": 6.8359375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 52.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.2784729004,
      "BAVIUS_4MTR_driveLoad": 10.943603515625,
      "BAVIUS_4MTR_aaCurr_SP1": 6.79931640625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 53.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22998.9051818848,
      "BAVIUS_4MTR_driveLoad": 12.451171875,
      "BAVIUS_4MTR_aaCurr_SP1": 6.75048828125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 53.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.6790161133,
      "BAVIUS_4MTR_driveLoad": 10.711669921875,
      "BAVIUS_4MTR_aaCurr_SP1": 6.77490234375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 53.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22999.3629455566,
      "BAVIUS_4MTR_driveLoad": 12.457275390625,
      "BAVIUS_4MTR_aaCurr_SP1": 6.689453125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 53.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23001.3656616211,
      "BAVIUS_4MTR_driveLoad": 12.738037109375,
      "BAVIUS_4MTR_aaCurr_SP1": 6.7626953125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 53.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22999.7634887695,
      "BAVIUS_4MTR_driveLoad": 5.9814453125,
      "BAVIUS_4MTR_aaCurr_SP1": 7.5927734375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 52.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 17999.5536804199,
      "BAVIUS_4MTR_driveLoad": 14.22119140625,
      "BAVIUS_4MTR_aaCurr_SP1": 7.4951171875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 46.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 6999.72152709961,
      "BAVIUS_4MTR_driveLoad": 7.147216796875,
      "BAVIUS_4MTR_aaCurr_SP1": 15.9912109375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.274169921875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 08:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.5732421875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22999.4201660156,
      "BAVIUS_4MTR_driveLoad": 12.7685546875,
      "BAVIUS_4MTR_aaCurr_SP1": 38.92822265625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 49.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.9078979492,
      "BAVIUS_4MTR_driveLoad": 57.8857421875,
      "BAVIUS_4MTR_aaCurr_SP1": 7.6904296875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 50.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 18001.3847351074,
      "BAVIUS_4MTR_driveLoad": 14.483642578125,
      "BAVIUS_4MTR_aaCurr_SP1": 9.04541015625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 38.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.152099609375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 40.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.2802734375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.94970703125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 33.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 51.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 22999.3057250977,
      "BAVIUS_4MTR_driveLoad": 46.356201171875,
      "BAVIUS_4MTR_aaCurr_SP1": 34.423828125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 51.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 18000.0114440918,
      "BAVIUS_4MTR_driveLoad": 10.15625,
      "BAVIUS_4MTR_aaCurr_SP1": 7.62939453125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 35.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.8642578125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 10.882568359375,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 09:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.34033203125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 34.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.091064453125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 44.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23000.8506774902,
      "BAVIUS_4MTR_driveLoad": 6.243896484375,
      "BAVIUS_4MTR_aaCurr_SP1": 7.82470703125,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 48.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 18000.2403259277,
      "BAVIUS_4MTR_driveLoad": 9.97314453125,
      "BAVIUS_4MTR_aaCurr_SP1": 9.02099609375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:17",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 47.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.20703125,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:22",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 36.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.176513671875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:27",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 12.39013671875,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:32",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 33.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 23001.0223388672,
      "BAVIUS_4MTR_driveLoad": 13.73291015625,
      "BAVIUS_4MTR_aaCurr_SP1": 55.23681640625,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:37",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 52.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 59.9365234375,
      "BAVIUS_4MTR_aaCurr_SP1": -0.03662109375,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:42",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 52.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 18000.7553100586,
      "BAVIUS_4MTR_driveLoad": 8.746337890625,
      "BAVIUS_4MTR_aaCurr_SP1": 7.50732421875,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:47",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 37.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 11.431884765625,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 10:52",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 32.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 1.0
    },
    {
      "dt_str": "2026-07-05 10:57",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 11:02",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 11:07",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    },
    {
      "dt_str": "2026-07-05 11:12",
      "BAVIUS_4MTR_SP1_MOTOR_TEMP": 31.0,
      "BAVIUS_4MTR_SPINDLE_actSpeed": 0.0,
      "BAVIUS_4MTR_driveLoad": 0.0,
      "BAVIUS_4MTR_aaCurr_SP1": 0.0,
      "BAVIUS_4_MTR_FAULT": 0.0
    }
  ]
};
window.OPEN_REPORTS_DATA = [
  {
    "ticketId": "SAP-PM-2026-94812",
    "equipment": "Bavius 4mtr N01-02 (TSAL)",
    "machineId": "bavius-01",
    "reportDate": "05.10.2026 12:28",
    "fault": "Consolidated Multi-Alarm: Spindle Motor Temp High (61.4\u00b0C), Spindle Vibration (4.85 mm/s) & Tool Pull-In Force (14.2 kN)",
    "redCount": 3,
    "redParameters": [
      {
        "name": "Spindle Motor Stator Temperature (PTC)",
        "value": "61.4 \u00b0C",
        "limit": "\u2265 60.0 \u00b0C (Trip)"
      },
      {
        "name": "Spindle Nose Vibration FFT RMS",
        "value": "4.85 mm/s",
        "limit": "\u2265 4.5 mm/s (Alarm)"
      },
      {
        "name": "Tool Clamping Pull-in Force",
        "value": "14.2 kN",
        "limit": "< 15.0 kN (Trip)"
      }
    ],
    "sparesRequired": "Rittal Chiller Filter Mat G4 (P/N: SK 3182.100), Hybrid Ceramic Spindle Bearing Set (P/N: HC-7014-C-P4S), Belleville Disc Spring Stack (P/N: Bavius 146598-BSS), HSK-A63 Clamping Collet (P/N: 95.600.034)",
    "recommendation": "1. Controlled spindle stop.\n2. Clean KRA150 chiller filter mat and condenser fins.\n3. Measure PTC resistance (< 3000 \u03a9 across pins 3-4).\n4. Inspect Belleville spring stack with Ott-Jakob POWER-CHECK pull-in force gauge.\n5. Inspect hybrid ceramic spindle bearings per Fischer Manual Ch. 7.2.",
    "policy": "1 Ticket Per Asset Policy Active: All 3 red parameters consolidated into single work order. New alarms inhibited until ticket closure or 10-day SLA window (Active: 2h 14m).",
    "status": "DISPATCHED TO MECHANICAL"
  },
  {
    "ticketId": "SAP-PM-2026-94808",
    "equipment": "Modig HHV3 C (TSAL)",
    "machineId": "modig-03c",
    "reportDate": "05.10.2026 09:58",
    "fault": "Consolidated Multi-Alarm: Compressed Air Pressure Low (< 5.2 bar) & Scale Purge Warning",
    "redCount": 4,
    "redParameters": [
      {
        "name": "Compressed Air Supply Pressure",
        "value": "5.1 bar",
        "limit": "< 5.5 bar"
      },
      {
        "name": "X-Axis Linear Optical Scale Purge",
        "value": "0.8 bar",
        "limit": "< 1.2 bar"
      },
      {
        "name": "Extrusion Feed Thrust Resistance",
        "value": "38.2 kN",
        "limit": "> 35.0 kN"
      },
      {
        "name": "Spindle Synchronous Drive Lag",
        "value": "14.8 ms",
        "limit": "> 12.0 ms"
      }
    ],
    "sparesRequired": "FESTO MS6-LFM Microfilter Cartridge (P/N: 532789), Polyurethane 12mm Pneumatic Tube (P/N: PUN-H-12x2-BL), Festo QS Quick Coupling (P/N: QS-12-8)",
    "recommendation": "Inspect pneumatic distribution manifold in drag chain. Replace cracked 12mm polyurethane air line. Clean optical scale purge filter bowl.",
    "policy": "1 Ticket Per Asset Policy Active: 4 red parameters consolidated. Re-raise inhibited for 10 days.",
    "status": "UNDER INVESTIGATION"
  },
  {
    "ticketId": "SAP-PM-2026-94799",
    "equipment": "Breton K60 5-Axis (TSAL)",
    "machineId": "breton-k60",
    "reportDate": "04.10.2026 21:15",
    "fault": "Consolidated Multi-Alarm: Z-Axis Hydrostatic Oil Pressure & Electrospindle Vibration",
    "redCount": 2,
    "redParameters": [
      {
        "name": "Hydrostatic Rail Pocket Pressure",
        "value": "38.5 bar",
        "limit": "< 45.0 bar"
      },
      {
        "name": "60k RPM Electrospindle Casing Vibration",
        "value": "5.10 mm/s",
        "limit": "> 4.20 mm/s"
      }
    ],
    "sparesRequired": "Hydac 10\u00b5m High-Pressure Filter Element (P/N: 0160 D 010 BN4HC), Hydrostatic Pocket Proportional Spool Valve (P/N: 4WE6D6X), Electrospindle Dynamic Balancing Kit",
    "recommendation": "Replace 10\u00b5m return filter element on HP pack, flush return manifolds for micro-debris, dynamic trim balance spindle rotor.",
    "policy": "1 Ticket Per Asset Policy Active: 2 red parameters consolidated. Re-raise inhibited for 10 days.",
    "status": "AWAITING SPARES"
  },
  {
    "ticketId": "SAP-PM-2026-94792",
    "equipment": "Bavius HBZ AeroCell 500 (TSAL)",
    "machineId": "bavius-aerocell",
    "reportDate": "04.10.2026 18:30",
    "fault": "Consolidated Multi-Alarm: Pallet Changer Swing Cylinder Drift & Vacuum Zone 2 Leak",
    "redCount": 2,
    "redParameters": [
      {
        "name": "Pallet Changer Swing Cylinder Timing",
        "value": "4.8 s",
        "limit": "> 3.5 s"
      },
      {
        "name": "Vacuum Clamping Zone 2 Pressure",
        "value": "-480 mbar",
        "limit": "\u2265 -500 mbar"
      }
    ],
    "sparesRequired": "VOC-AD-S EPDM Foam Perimeter Seal (P/N: VOC-SEAL-8M), Turck Inductive Proximity Sensor M12 (P/N: Bi2-M12-AP6X), Hydraulic Swing Cylinder Seal Pack",
    "recommendation": "Re-align inductive proximity switch B47, replace damaged vacuum table perimeter lip seal, and test clamping hold at -600 mbar.",
    "policy": "1 Ticket Per Asset Policy Active: 2 red parameters consolidated. Re-raise inhibited for 10 days.",
    "status": "SCHEDULED MAINTENANCE"
  },
  {
    "ticketId": "SAP-PM-2026-94785",
    "equipment": "Makino T1 5-Axis (TSAL)",
    "machineId": "makino-t1",
    "reportDate": "04.10.2026 16:40",
    "fault": "Consolidated Multi-Alarm: High-Torque Gear Spindle Oil Recirculation Low",
    "redCount": 1,
    "redParameters": [
      {
        "name": "Spindle Gearbox Lubrication Flow",
        "value": "1.8 L/min",
        "limit": "< 2.5 L/min"
      }
    ],
    "sparesRequired": "Vogel Gear Pump Cartridge (P/N: KFB-01-200), High-Viscosity Oil Filter Element 25\u00b5m (P/N: MF-25-HV), Flow Switch Contact Block",
    "recommendation": "Inspect gear oil suction strainer for brass particulate, test pump discharge relief valve, top up ISO VG 68 synthetic gear oil.",
    "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
    "status": "IN PROGRESS"
  },
  {
    "ticketId": "SAP-PM-2026-94776",
    "equipment": "Starrag Heckert HEC 800 (TSAL)",
    "machineId": "starrag-hec800",
    "reportDate": "03.10.2026 08:30",
    "fault": "Consolidated Multi-Alarm: High-Pressure Coolant Through-Spindle Filter Differential Pressure Trip",
    "redCount": 1,
    "redParameters": [
      {
        "name": "CTS Coolant Delivery Differential Pressure",
        "value": "4.8 bar",
        "limit": "> 4.0 bar"
      }
    ],
    "sparesRequired": "Knoll CTS High-Pressure Duplex Filter Element 25\u00b5m (P/N: 700501-CTS), Rotary Union Ceramic Mechanical Seal (P/N: Deublin 1117-000)",
    "recommendation": "Index duplex filter valve to chamber B, replace clogged 25\u00b5m stainless steel mesh insert, flush Deublin rotary coolant union.",
    "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
    "status": "UNDER INVESTIGATION"
  },
  {
    "ticketId": "SAP-PM-2026-94768",
    "equipment": "Makino MAG3 5-Axis (TSAL)",
    "machineId": "makino-mag3",
    "reportDate": "02.10.2026 14:10",
    "fault": "Consolidated Multi-Alarm: B-Axis Direct Drive Torque Motor Stator Over-Temperature",
    "redCount": 1,
    "redParameters": [
      {
        "name": "B-Axis Torque Motor Stator Temp",
        "value": "64.2 \u00b0C",
        "limit": "> 60.0 \u00b0C"
      }
    ],
    "sparesRequired": "Parker Torque Motor Cooling Manifold O-Ring Set (P/N: OR-TM-60), Glycol Cooling Circulation Pump Impeller, KTY84 Temperature Sensor",
    "recommendation": "Bleed air pocket from B-axis stator water jacket cooling circuit, check chiller auxiliary delivery valve, verify thermal limit trip.",
    "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
    "status": "DISPATCHED TO PNEUMATICS"
  },
  {
    "ticketId": "SAP-PM-2026-94755",
    "equipment": "Okuma MU-8000V (TSAL)",
    "machineId": "okuma-mu8000",
    "reportDate": "01.10.2026 11:20",
    "fault": "Consolidated Multi-Alarm: Laser Cladding Head Chiller Flow Restriction",
    "redCount": 1,
    "redParameters": [
      {
        "name": "Laser Optics Deionized Chiller Flow",
        "value": "2.2 L/min",
        "limit": "< 3.0 L/min"
      }
    ],
    "sparesRequired": "DI Resin Deionizing Filter Cartridge (P/N: DI-OPT-100), Particle Filter 5\u00b5m (P/N: P-5-SS), Coolant Flow Turbine Sensor",
    "recommendation": "Replace deionizer cartridge, clean inline particle strainer, measure coolant conductivity (< 5 \u00b5S/cm).",
    "policy": "1 Ticket Per Asset Policy Active: 1 red parameter tracked. Re-raise inhibited for 10 days.",
    "status": "SCHEDULED MAINTENANCE"
  }
];
window.CLOSED_REPORTS_DATA = [
  {
    "ticketId": "SAP-PM-2026-94750",
    "equipment": "Bavius 4mtr N01-02 (TSAL)",
    "diagnosis": "Pallet Clamping Proportional Valve 1V3 Sticking",
    "detectionDate": "29.09.2026 08:15",
    "closureDate": "29.09.2026 14:45",
    "downtimeSaved": "12.3 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94743",
    "equipment": "Fanuc Robodrill \u03b1-D21LiB5 (TSAL)",
    "diagnosis": "KRA150 Chiller Air Filter Mat FAC Clogged",
    "detectionDate": "26.09.2026 09:15",
    "closureDate": "26.09.2026 15:45",
    "downtimeSaved": "11.4 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94736",
    "equipment": "Breton K60 5-Axis (TSAL)",
    "diagnosis": "Tool Changer Shutter Door Cylinder B47 Misaligned",
    "detectionDate": "23.09.2026 10:15",
    "closureDate": "23.09.2026 16:45",
    "downtimeSaved": "9.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94729",
    "equipment": "Breton K80 Heavy Gantry (TSAL)",
    "diagnosis": "Linear Scale Sealing Air Purge Drop (Alarm 700216)",
    "detectionDate": "20.09.2026 11:15",
    "closureDate": "20.09.2026 17:45",
    "downtimeSaved": "11.7 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94722",
    "equipment": "Makino T1 5-Axis (TSAL)",
    "diagnosis": "Spindle Front Bearing Temperature Warning (> 48\u00b0C)",
    "detectionDate": "17.09.2026 12:15",
    "closureDate": "17.09.2026 18:45",
    "downtimeSaved": "18.4 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94715",
    "equipment": "Modig HHV3 C (TSAL)",
    "diagnosis": "Vacuum Clamping Pressure Drop (-550 mbar warning)",
    "detectionDate": "14.09.2026 13:15",
    "closureDate": "14.09.2026 19:45",
    "downtimeSaved": "5.5 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94708",
    "equipment": "Makino MAG3 5-Axis (TSAL)",
    "diagnosis": "Knoll KF 200 Filter Fleece Roll Depleted",
    "detectionDate": "11.09.2026 14:15",
    "closureDate": "11.09.2026 20:45",
    "downtimeSaved": "4.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94701",
    "equipment": "DMG MORI DMU 80 P (TSAL)",
    "diagnosis": "Axis Y11 Way Lube Pressure Switch Timeout",
    "detectionDate": "08.09.2026 15:15",
    "closureDate": "08.09.2026 21:45",
    "downtimeSaved": "11.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94694",
    "equipment": "Starrag Heckert HEC 800 (TSAL)",
    "diagnosis": "Hydraulic Return Filter Differential Pressure High",
    "detectionDate": "05.09.2026 16:15",
    "closureDate": "05.09.2026 14:45",
    "downtimeSaved": "10.0 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94687",
    "equipment": "Hermle C 42 U MT (TSAL)",
    "diagnosis": "AFS Mist Collector High Differential Pressure",
    "detectionDate": "02.09.2026 17:15",
    "closureDate": "02.09.2026 15:45",
    "downtimeSaved": "9.5 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94680",
    "equipment": "Mazak Variaxis i-800 NEO (TSAL)",
    "diagnosis": "Main Spindle Ott-Jakob Pull-In Force Degradation",
    "detectionDate": "30.08.2026 08:15",
    "closureDate": "30.08.2026 16:45",
    "downtimeSaved": "15.7 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94673",
    "equipment": "GROB G550 5-Axis (TSAL)",
    "diagnosis": "Central Coolant Tank Level Switch Low Alarm",
    "detectionDate": "27.08.2026 09:15",
    "closureDate": "27.08.2026 17:45",
    "downtimeSaved": "4.2 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94666",
    "equipment": "Okuma MU-8000V (TSAL)",
    "diagnosis": "Rotary Table C-Axis Encoder Optical Fogging",
    "detectionDate": "24.08.2026 10:15",
    "closureDate": "24.08.2026 18:45",
    "downtimeSaved": "13.4 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94659",
    "equipment": "Haas UMC-1000 5-Axis (TSAL)",
    "diagnosis": "Chip Conveyor Scraper Belt Jam (Torque Overload)",
    "detectionDate": "21.08.2026 11:15",
    "closureDate": "21.08.2026 19:45",
    "downtimeSaved": "8.7 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94652",
    "equipment": "Heller HF 5500 (TSAL)",
    "diagnosis": "Spindle Recooler Flow Switch 700501 Intermittent",
    "detectionDate": "18.08.2026 12:15",
    "closureDate": "18.08.2026 20:45",
    "downtimeSaved": "17.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94645",
    "equipment": "Chiron FZ 15W High-Speed (TSAL)",
    "diagnosis": "Safety Integrated Door Interlock Switch B88 Fault",
    "detectionDate": "15.08.2026 13:15",
    "closureDate": "15.08.2026 21:45",
    "downtimeSaved": "4.2 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94638",
    "equipment": "Bavius 4mtr N01-02 (TSAL)",
    "diagnosis": "Pallet Clamping Proportional Valve 1V3 Sticking",
    "detectionDate": "12.08.2026 14:15",
    "closureDate": "12.08.2026 14:45",
    "downtimeSaved": "13.5 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94631",
    "equipment": "Fanuc Robodrill \u03b1-D21LiB5 (TSAL)",
    "diagnosis": "KRA150 Chiller Air Filter Mat FAC Clogged",
    "detectionDate": "09.08.2026 15:15",
    "closureDate": "09.08.2026 15:45",
    "downtimeSaved": "12.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94624",
    "equipment": "Breton K60 5-Axis (TSAL)",
    "diagnosis": "Tool Changer Shutter Door Cylinder B47 Misaligned",
    "detectionDate": "06.08.2026 16:15",
    "closureDate": "06.08.2026 16:45",
    "downtimeSaved": "10.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94617",
    "equipment": "Breton K80 Heavy Gantry (TSAL)",
    "diagnosis": "Linear Scale Sealing Air Purge Drop (Alarm 700216)",
    "detectionDate": "03.08.2026 17:15",
    "closureDate": "03.08.2026 17:45",
    "downtimeSaved": "12.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94610",
    "equipment": "Makino T1 5-Axis (TSAL)",
    "diagnosis": "Spindle Front Bearing Temperature Warning (> 48\u00b0C)",
    "detectionDate": "31.07.2026 08:15",
    "closureDate": "31.07.2026 18:45",
    "downtimeSaved": "13.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94603",
    "equipment": "Modig HHV3 C (TSAL)",
    "diagnosis": "Vacuum Clamping Pressure Drop (-550 mbar warning)",
    "detectionDate": "28.07.2026 09:15",
    "closureDate": "28.07.2026 19:45",
    "downtimeSaved": "6.7 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94596",
    "equipment": "Makino MAG3 5-Axis (TSAL)",
    "diagnosis": "Knoll KF 200 Filter Fleece Roll Depleted",
    "detectionDate": "25.07.2026 10:15",
    "closureDate": "25.07.2026 20:45",
    "downtimeSaved": "5.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94589",
    "equipment": "DMG MORI DMU 80 P (TSAL)",
    "diagnosis": "Axis Y11 Way Lube Pressure Switch Timeout",
    "detectionDate": "22.07.2026 11:15",
    "closureDate": "22.07.2026 21:45",
    "downtimeSaved": "12.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94582",
    "equipment": "Starrag Heckert HEC 800 (TSAL)",
    "diagnosis": "Hydraulic Return Filter Differential Pressure High",
    "detectionDate": "19.07.2026 12:15",
    "closureDate": "19.07.2026 14:45",
    "downtimeSaved": "11.2 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94575",
    "equipment": "Hermle C 42 U MT (TSAL)",
    "diagnosis": "AFS Mist Collector High Differential Pressure",
    "detectionDate": "16.07.2026 13:15",
    "closureDate": "16.07.2026 15:45",
    "downtimeSaved": "4.7 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94568",
    "equipment": "Mazak Variaxis i-800 NEO (TSAL)",
    "diagnosis": "Main Spindle Ott-Jakob Pull-In Force Degradation",
    "detectionDate": "13.07.2026 14:15",
    "closureDate": "13.07.2026 16:45",
    "downtimeSaved": "16.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94561",
    "equipment": "GROB G550 5-Axis (TSAL)",
    "diagnosis": "Central Coolant Tank Level Switch Low Alarm",
    "detectionDate": "10.07.2026 15:15",
    "closureDate": "10.07.2026 17:45",
    "downtimeSaved": "5.4 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94554",
    "equipment": "Okuma MU-8000V (TSAL)",
    "diagnosis": "Rotary Table C-Axis Encoder Optical Fogging",
    "detectionDate": "07.07.2026 16:15",
    "closureDate": "07.07.2026 18:45",
    "downtimeSaved": "14.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94547",
    "equipment": "Haas UMC-1000 5-Axis (TSAL)",
    "diagnosis": "Chip Conveyor Scraper Belt Jam (Torque Overload)",
    "detectionDate": "04.07.2026 17:15",
    "closureDate": "04.07.2026 19:45",
    "downtimeSaved": "9.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94540",
    "equipment": "Heller HF 5500 (TSAL)",
    "diagnosis": "Spindle Recooler Flow Switch 700501 Intermittent",
    "detectionDate": "01.07.2026 08:15",
    "closureDate": "01.07.2026 20:45",
    "downtimeSaved": "12.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94533",
    "equipment": "Chiron FZ 15W High-Speed (TSAL)",
    "diagnosis": "Safety Integrated Door Interlock Switch B88 Fault",
    "detectionDate": "28.06.2026 09:15",
    "closureDate": "28.06.2026 21:45",
    "downtimeSaved": "5.5 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94526",
    "equipment": "Bavius 4mtr N01-02 (TSAL)",
    "diagnosis": "Pallet Clamping Proportional Valve 1V3 Sticking",
    "detectionDate": "25.06.2026 10:15",
    "closureDate": "25.06.2026 14:45",
    "downtimeSaved": "14.7 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94519",
    "equipment": "Fanuc Robodrill \u03b1-D21LiB5 (TSAL)",
    "diagnosis": "KRA150 Chiller Air Filter Mat FAC Clogged",
    "detectionDate": "22.06.2026 11:15",
    "closureDate": "22.06.2026 15:45",
    "downtimeSaved": "13.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94512",
    "equipment": "Breton K60 5-Axis (TSAL)",
    "diagnosis": "Tool Changer Shutter Door Cylinder B47 Misaligned",
    "detectionDate": "19.06.2026 12:15",
    "closureDate": "19.06.2026 16:45",
    "downtimeSaved": "12.0 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94505",
    "equipment": "Breton K80 Heavy Gantry (TSAL)",
    "diagnosis": "Linear Scale Sealing Air Purge Drop (Alarm 700216)",
    "detectionDate": "16.06.2026 13:15",
    "closureDate": "16.06.2026 17:45",
    "downtimeSaved": "8.1 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94498",
    "equipment": "Makino T1 5-Axis (TSAL)",
    "diagnosis": "Spindle Front Bearing Temperature Warning (> 48\u00b0C)",
    "detectionDate": "13.06.2026 14:15",
    "closureDate": "13.06.2026 18:45",
    "downtimeSaved": "14.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94491",
    "equipment": "Modig HHV3 C (TSAL)",
    "diagnosis": "Vacuum Clamping Pressure Drop (-550 mbar warning)",
    "detectionDate": "10.06.2026 15:15",
    "closureDate": "10.06.2026 19:45",
    "downtimeSaved": "7.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94484",
    "equipment": "Makino MAG3 5-Axis (TSAL)",
    "diagnosis": "Knoll KF 200 Filter Fleece Roll Depleted",
    "detectionDate": "07.06.2026 16:15",
    "closureDate": "07.06.2026 20:45",
    "downtimeSaved": "7.0 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94477",
    "equipment": "DMG MORI DMU 80 P (TSAL)",
    "diagnosis": "Axis Y11 Way Lube Pressure Switch Timeout",
    "detectionDate": "04.06.2026 17:15",
    "closureDate": "04.06.2026 21:45",
    "downtimeSaved": "14.1 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94470",
    "equipment": "Starrag Heckert HEC 800 (TSAL)",
    "diagnosis": "Hydraulic Return Filter Differential Pressure High",
    "detectionDate": "01.06.2026 08:15",
    "closureDate": "01.06.2026 14:45",
    "downtimeSaved": "6.4 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94463",
    "equipment": "Hermle C 42 U MT (TSAL)",
    "diagnosis": "AFS Mist Collector High Differential Pressure",
    "detectionDate": "29.05.2026 09:15",
    "closureDate": "29.05.2026 15:45",
    "downtimeSaved": "5.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94456",
    "equipment": "Mazak Variaxis i-800 NEO (TSAL)",
    "diagnosis": "Main Spindle Ott-Jakob Pull-In Force Degradation",
    "detectionDate": "26.05.2026 10:15",
    "closureDate": "26.05.2026 16:45",
    "downtimeSaved": "18.1 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94449",
    "equipment": "GROB G550 5-Axis (TSAL)",
    "diagnosis": "Central Coolant Tank Level Switch Low Alarm",
    "detectionDate": "23.05.2026 11:15",
    "closureDate": "23.05.2026 17:45",
    "downtimeSaved": "6.6 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94442",
    "equipment": "Okuma MU-8000V (TSAL)",
    "diagnosis": "Rotary Table C-Axis Encoder Optical Fogging",
    "detectionDate": "20.05.2026 12:15",
    "closureDate": "20.05.2026 18:45",
    "downtimeSaved": "15.8 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94435",
    "equipment": "Haas UMC-1000 5-Axis (TSAL)",
    "diagnosis": "Chip Conveyor Scraper Belt Jam (Torque Overload)",
    "detectionDate": "17.05.2026 13:15",
    "closureDate": "17.05.2026 19:45",
    "downtimeSaved": "5.1 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94428",
    "equipment": "Heller HF 5500 (TSAL)",
    "diagnosis": "Spindle Recooler Flow Switch 700501 Intermittent",
    "detectionDate": "14.05.2026 14:15",
    "closureDate": "14.05.2026 20:45",
    "downtimeSaved": "13.9 hrs",
    "status": "CLOSED / VERIFIED"
  },
  {
    "ticketId": "SAP-PM-2026-94421",
    "equipment": "Chiron FZ 15W High-Speed (TSAL)",
    "diagnosis": "Safety Integrated Door Interlock Switch B88 Fault",
    "detectionDate": "11.05.2026 15:15",
    "closureDate": "11.05.2026 21:45",
    "downtimeSaved": "6.7 hrs",
    "status": "CLOSED / VERIFIED"
  }
];
window.COMPLIANCE_SCORE = {
  "closed": 48,
  "open": 8,
  "total": 56,
  "percentage": 85.7,
  "target": 85.0
};
window.PM_CHECKLIST_DATA = {
  "equipmentId": "11000452",
  "equipmentName": "Bavius 4mtr N01-02",
  "tasklistGroup": "12240",
  "plant": "1041",
  "workCenter": "N01_PEM",
  "controlKey": "PM01",
  "lastAiEvaluationDate": "2026-10-05",
  "nextScheduledAiReview": "2027-04-05",
  "aiReviewCycle": "6 Months (Continuous Breakdown Learning)",
  "summary": {
    "totalBaselineOps": 77,
    "frequencyEscalatedOps": 5,
    "newConditionOpsAdded": 4,
    "estimatedDowntimeAvoidanceHrs": "142.5 hrs/yr"
  },
  "operations": [
    {
      "act": "0010",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Coolant leakage-Pumps,Pipe&Rotary Unit",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0020",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Damage of wiper-LM guide&ball screw",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0030",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Condition of chip conveyor gearbox chain",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0040",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Main Control Cabinet checking",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0050",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Clean filter& Ystrainer-coolant line",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0060",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check clogging of Coolant nozzle holes",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0070",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Condition of chain link of conveyor",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0080",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check Abnormal noise APC-Pallet changing",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0090",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Condition of through coolant filter",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0100",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check tightning of conveyor chain",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0110",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check condition of Radiator(oil cooler)",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0120",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check grease on LM guide&ballscrew",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0130",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check any abnormal noise from conveyor",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0140",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check damage of telescopic guard&wiper",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0145",
      "grp": "1",
      "freq": "Monthly (NEW)",
      "work": 0.3,
      "unit": "HR",
      "desc": "Ott-Jakob POWER-CHECK Tool Pull-in Force Clamping Verification (Target: 18 kN, Alarm < 15 kN)",
      "status": "AI_ADDED",
      "aiAction": "NEW CONDITION MONITORING TASK",
      "justification": "Correlated with 12 Tool Clamping Loss Breakdowns (38.6 hrs downtime). Missing from baseline monthly PM."
    },
    {
      "act": "0150",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Neutral to Earth & L to Neutral voltage",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0160",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check abnormal noise&vibration from axis",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0165",
      "grp": "1",
      "freq": "Bi-Weekly (NEW)",
      "work": 0.3,
      "unit": "HR",
      "desc": "SiViB Record 31 Accelerometer Spindle Nose FFT RMS Vibration Spectral Baseline (< 3.0 mm/s)",
      "status": "AI_ADDED",
      "aiAction": "NEW CONDITION MONITORING TASK",
      "justification": "Correlated with 14 Spindle Bearing Dynamic Runout Breakdowns (46.2 hrs downtime). Prevents catastrophic ceramic bearing seizure."
    },
    {
      "act": "0170",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Clean line filter of Vacuum system",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0180",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Carbon brush of volt. stabilizer",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0190",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check spindle Lubricaton mist working",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0200",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check spindle lubrication line leakage",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0210",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Clean Prefilter of Vacuum system",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0220",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check Operator door&working",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0380",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Clean chiller Condenser coil",
      "status": "AI_ESCALATED",
      "aiAction": "Escalate to Weekly",
      "justification": "Correlated with 17 Spindle Over-Temp Breakdowns (85.33 hrs downtime). Monthly cleaning interval inadequate for continuous aluminum milling."
    },
    {
      "act": "0420",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Clean Chiller unit filter",
      "status": "AI_ESCALATED",
      "aiAction": "Escalate to Weekly",
      "justification": "KRA150 G4 filter mat saturation leads directly to thermal saturation trips within 18 days of high-velocity milling."
    },
    {
      "act": "0385",
      "grp": "1",
      "freq": "Monthly (NEW)",
      "work": 0.2,
      "unit": "HR",
      "desc": "Measure KRA150 Chiller Recooler Flow Rate & Glycol 30% Concentration Refractometer Ratio",
      "status": "AI_ADDED",
      "aiAction": "NEW CONDITION MONITORING TASK",
      "justification": "Flow monitor switch 700501 intermittent trip occurred 6 times in historical log."
    },
    {
      "act": "0360",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check any leakage from Air line",
      "status": "Standard",
      "aiAction": "Keep Monthly"
    },
    {
      "act": "0500",
      "grp": "1",
      "freq": "Monthly",
      "work": 0.2,
      "unit": "HR",
      "desc": "cln all air line filter",
      "status": "AI_ESCALATED",
      "aiAction": "Escalate to Bi-Weekly",
      "justification": "13 Compressed Air Supply loss incidents caused by microfilter element differential pressure loading."
    },
    {
      "act": "0525",
      "grp": "1",
      "freq": "Monthly (NEW)",
      "work": 0.2,
      "unit": "HR",
      "desc": "VOC-AD-S Vacuum Workholding Differential Leak Rate & Seal Lip Integrity Check (-600 mbar)",
      "status": "AI_ADDED",
      "aiAction": "NEW CONDITION MONITORING TASK",
      "justification": "Prevents catastrophic aerodynamic bulkhead workpiece shifting during high-speed roughing."
    },
    {
      "act": "0010",
      "grp": "2",
      "freq": "Quarterly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Coupling bolt-ballscrew&servomotor",
      "status": "Standard",
      "aiAction": "Keep Quarterly"
    },
    {
      "act": "0040",
      "grp": "2",
      "freq": "Quarterly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check Spindle lubrication oil condition",
      "status": "Standard",
      "aiAction": "Keep Quarterly"
    },
    {
      "act": "0070",
      "grp": "2",
      "freq": "Quarterly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check condition of chiller oil",
      "status": "Standard",
      "aiAction": "Keep Quarterly"
    },
    {
      "act": "0120",
      "grp": "2",
      "freq": "Quarterly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Cleaning of spindle cone",
      "status": "Standard",
      "aiAction": "Keep Quarterly"
    },
    {
      "act": "0140",
      "grp": "2",
      "freq": "Quarterly",
      "work": 0.2,
      "unit": "HR",
      "desc": "chK cover o ring of sp connector(RCCA)",
      "status": "Standard",
      "aiAction": "Keep Quarterly"
    },
    {
      "act": "0010",
      "grp": "3",
      "freq": "Half Yearly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check condition of Hydraulic oil",
      "status": "Standard",
      "aiAction": "Keep Half-Yearly"
    },
    {
      "act": "0010",
      "grp": "4",
      "freq": "Yearly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Check return line filter of hydr.syst",
      "status": "AI_ESCALATED",
      "aiAction": "Escalate to Quarterly",
      "justification": "Yearly frequency allowed return filter DP to exceed 2.1 bar, triggering servo cylinder stick-slip."
    },
    {
      "act": "0030",
      "grp": "4",
      "freq": "Yearly",
      "work": 0.2,
      "unit": "HR",
      "desc": "Clean spindle chiller tank",
      "status": "AI_ESCALATED",
      "aiAction": "Escalate to Half-Yearly",
      "justification": "Biofilm and algae accumulation in chiller reservoir reduced heat exchanger efficiency after 7 months."
    }
  ]
};


window.METRICS_DASHBOARD_DATA = {
  "overall": {
    "totalMachines": 341,
    "downtimeToday": 38.96,
    "downtimeMonth": 2597.91,
    "downtimeYtd": 12469.97,
    "availabilityPct": 98.9,
    "mtbfHrs": 626.9,
    "mttrHrs": 6.98,
    "pmCompliancePct": 94.8,
    "totalBreakdownOccurrences": 372,
    "targetAvailabilityPct": 99.5,
    "trend": [
      {
        "month": "Apr",
        "availability": 99.12,
        "downtime": 468.2
      },
      {
        "month": "May",
        "availability": 98.85,
        "downtime": 572.4
      },
      {
        "month": "Jun",
        "availability": 98.42,
        "downtime": 650.1
      },
      {
        "month": "Jul",
        "availability": 99.04,
        "downtime": 520.8
      },
      {
        "month": "Aug",
        "availability": 98.9,
        "downtime": 2597.91
      },
      {
        "month": "Sep",
        "availability": 99.25,
        "downtime": 390.5
      }
    ],
    "formulas": [
      {
        "metric": "Equipment Uptime %",
        "formula": "(Sum of Available Hours - Breakdown Hours) / Sum of Available Hours",
        "target": ">= 99.50%"
      },
      {
        "metric": "MTBF (Mean Time Between Failures)",
        "formula": "(Available Hours - Breakdown Hours) / Breakdown Occurrences",
        "target": ">= 500 Hours"
      },
      {
        "metric": "MTTR (Mean Time To Recovery)",
        "formula": "Total Breakdown Hours / Total Breakdown Occurrences",
        "target": "<= 4.0 Hours"
      },
      {
        "metric": "PM Compliance %",
        "formula": "Closed PM Orders / Total Scheduled PM Orders",
        "target": ">= 95.00%"
      }
    ],
    "cmCompliancePct": 87.3
  },
  "plants": [
    {
      "id": "TASL-NGP",
      "rawName": "TASL- NGP",
      "name": "TASL Aerospace Facility",
      "location": "Nagpur (MIHAN SEZ)",
      "plantCode": "2001",
      "workCenter": "NGP_AERO",
      "machinesCount": 41,
      "availabilityPct": 92.82,
      "unplannedDowntimeHrs": 2190.0,
      "downtimeToday": 32.85,
      "downtimeMonth": 2190.0,
      "downtimeYtd": 10512.0,
      "mtbfHrs": 108.9,
      "mttrHrs": 8.42,
      "pmCompliancePct": 85.9,
      "breakdownOccurrences": 260,
      "spocConfirmation": "Pending",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 94.02,
          "downtime": 394.2
        },
        {
          "month": "May",
          "availability": 93.62,
          "downtime": 481.8
        },
        {
          "month": "Jun",
          "availability": 92.42,
          "downtime": 547.5
        },
        {
          "month": "Jul",
          "availability": 93.32,
          "downtime": 438.0
        },
        {
          "month": "Aug",
          "availability": 92.82,
          "downtime": 2190.0
        },
        {
          "month": "Sep",
          "availability": 93.82,
          "downtime": 328.5
        }
      ],
      "cmCompliancePct": 87.3
    },
    {
      "id": "TASL-BLR",
      "rawName": "TASL-BLR",
      "name": "TASL Aerospace & Defence",
      "location": "Bengaluru (Aerospace Park)",
      "plantCode": "1002",
      "workCenter": "BLR_AERO",
      "machinesCount": 48,
      "availabilityPct": 99.77,
      "unplannedDowntimeHrs": 82.12,
      "downtimeToday": 1.23,
      "downtimeMonth": 82.12,
      "downtimeYtd": 394.18,
      "mtbfHrs": 1696.7,
      "mttrHrs": 3.91,
      "pmCompliancePct": 0.0,
      "breakdownOccurrences": 21,
      "spocConfirmation": "Yes",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 14.8
        },
        {
          "month": "May",
          "availability": 100.0,
          "downtime": 18.1
        },
        {
          "month": "Jun",
          "availability": 99.37,
          "downtime": 20.5
        },
        {
          "month": "Jul",
          "availability": 100.0,
          "downtime": 16.4
        },
        {
          "month": "Aug",
          "availability": 99.77,
          "downtime": 82.1
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 12.3
        }
      ],
      "cmCompliancePct": 94.1
    },
    {
      "id": "TCOE",
      "rawName": "TCOE",
      "name": "TASL Center of Excellence",
      "location": "Hyderabad (Adibatla)",
      "plantCode": "1031",
      "workCenter": "TCOE_COMP",
      "machinesCount": 120,
      "availabilityPct": 99.99,
      "unplannedDowntimeHrs": 5.54,
      "downtimeToday": 0.08,
      "downtimeMonth": 5.54,
      "downtimeYtd": 26.59,
      "mtbfHrs": 89274.5,
      "mttrHrs": 5.54,
      "pmCompliancePct": 100.0,
      "breakdownOccurrences": 1,
      "spocConfirmation": "Yes",
      "remarks": "The reported unplanned downtime of 5.54 hours is incorrect in actual . The TCOE production team generates/reports breakdown notifications through MES, which is currently the official data source for PEM metrics. Following the implementation of the QR code feature in SAP S/4HANA, the team has aligned and starting the use of SAP Fiori app. We aim to complete the migration to SAP by the end of October 2026; until then, all PEM metrics should continue to be sourced from MES.",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 1.0
        },
        {
          "month": "May",
          "availability": 99.99,
          "downtime": 1.2
        },
        {
          "month": "Jun",
          "availability": 99.89,
          "downtime": 1.4
        },
        {
          "month": "Jul",
          "availability": 99.99,
          "downtime": 1.1
        },
        {
          "month": "Aug",
          "availability": 99.99,
          "downtime": 5.5
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 0.8
        }
      ],
      "cmCompliancePct": 96.5
    },
    {
      "id": "TSAL",
      "rawName": "TSAL",
      "name": "TSAL Aerostructures Facility",
      "location": "Hyderabad (TSAL)",
      "plantCode": "1041",
      "workCenter": "N01_PEM",
      "machinesCount": 77,
      "availabilityPct": 99.44,
      "unplannedDowntimeHrs": 320.21,
      "downtimeToday": 4.8,
      "downtimeMonth": 320.21,
      "downtimeYtd": 1537.01,
      "mtbfHrs": 640.1,
      "mttrHrs": 3.6,
      "pmCompliancePct": 100.0,
      "breakdownOccurrences": 89,
      "spocConfirmation": "Pending",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 57.6
        },
        {
          "month": "May",
          "availability": 100.0,
          "downtime": 70.4
        },
        {
          "month": "Jun",
          "availability": 99.04,
          "downtime": 80.1
        },
        {
          "month": "Jul",
          "availability": 99.94,
          "downtime": 64.0
        },
        {
          "month": "Aug",
          "availability": 99.44,
          "downtime": 320.2
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 48.0
        }
      ],
      "cmCompliancePct": 91.2
    },
    {
      "id": "TASL-H01",
      "rawName": "TASL-H01",
      "name": "TASL Hyderabad Plant 01",
      "location": "Hyderabad (GMR Aerospace)",
      "plantCode": "1001",
      "workCenter": "HYD_PL1",
      "machinesCount": 19,
      "availabilityPct": 99.99,
      "unplannedDowntimeHrs": 0.04,
      "downtimeToday": 0.0,
      "downtimeMonth": 0.04,
      "downtimeYtd": 0.19,
      "mtbfHrs": 7951.5,
      "mttrHrs": 0.04,
      "pmCompliancePct": 100.0,
      "breakdownOccurrences": 1,
      "spocConfirmation": "Pending",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "May",
          "availability": 99.99,
          "downtime": 0.0
        },
        {
          "month": "Jun",
          "availability": 99.89,
          "downtime": 0.0
        },
        {
          "month": "Jul",
          "availability": 99.99,
          "downtime": 0.0
        },
        {
          "month": "Aug",
          "availability": 99.99,
          "downtime": 0.0
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 0.0
        }
      ],
      "cmCompliancePct": 100.0
    },
    {
      "id": "TBAL",
      "rawName": "TBAL",
      "name": "Tata Boeing Aerospace Limited",
      "location": "Hyderabad (Adibatla)",
      "plantCode": "2501",
      "workCenter": "TBAL_AH64",
      "machinesCount": 14,
      "availabilityPct": 100.0,
      "unplannedDowntimeHrs": 0.0,
      "downtimeToday": 0.0,
      "downtimeMonth": 0.0,
      "downtimeYtd": 0.0,
      "mtbfHrs": 5859.0,
      "mttrHrs": 0.0,
      "pmCompliancePct": 72.2,
      "breakdownOccurrences": 0,
      "spocConfirmation": "Pending",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "May",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Jun",
          "availability": 99.9,
          "downtime": 0.0
        },
        {
          "month": "Jul",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Aug",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 0.0
        }
      ],
      "cmCompliancePct": 100.0
    },
    {
      "id": "TLMAL",
      "rawName": "TLMAL",
      "name": "Tata Lockheed Martin Aerostructures",
      "location": "Hyderabad (Adibatla)",
      "plantCode": "1501",
      "workCenter": "TLMAL_C130",
      "machinesCount": 21,
      "availabilityPct": 100.0,
      "unplannedDowntimeHrs": 0.0,
      "downtimeToday": 0.0,
      "downtimeMonth": 0.0,
      "downtimeYtd": 0.0,
      "mtbfHrs": 8788.5,
      "mttrHrs": 0.0,
      "pmCompliancePct": 100.0,
      "breakdownOccurrences": 0,
      "spocConfirmation": "Pending",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "May",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Jun",
          "availability": 99.9,
          "downtime": 0.0
        },
        {
          "month": "Jul",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Aug",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 0.0
        }
      ],
      "cmCompliancePct": 100.0
    },
    {
      "id": "MCA",
      "rawName": "MCA",
      "name": "Metal Center Aerospace",
      "location": "Hyderabad",
      "plantCode": "1004",
      "workCenter": "MCA_RAW",
      "machinesCount": 1,
      "availabilityPct": 100.0,
      "unplannedDowntimeHrs": 0.0,
      "downtimeToday": 0.0,
      "downtimeMonth": 0.0,
      "downtimeYtd": 0.0,
      "mtbfHrs": 418.5,
      "mttrHrs": 0.0,
      "pmCompliancePct": 100.0,
      "breakdownOccurrences": 0,
      "spocConfirmation": "Yes",
      "remarks": "",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "May",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Jun",
          "availability": 99.9,
          "downtime": 0.0
        },
        {
          "month": "Jul",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Aug",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 0.0
        }
      ],
      "cmCompliancePct": 100.0
    },
    {
      "id": "TASL-XXX",
      "rawName": "TASL-XXX",
      "name": "TASL Future Connected Plant",
      "location": "Expansion Facility (Symbolic)",
      "plantCode": "9999",
      "workCenter": "FUT_FAC",
      "machinesCount": 0,
      "availabilityPct": 100.0,
      "unplannedDowntimeHrs": 0.0,
      "downtimeToday": 0.0,
      "downtimeMonth": 0.0,
      "downtimeYtd": 0.0,
      "mtbfHrs": 0.0,
      "mttrHrs": 0.0,
      "pmCompliancePct": 100.0,
      "breakdownOccurrences": 0,
      "spocConfirmation": "Configured for IoT Integration",
      "remarks": "Pre-configured node for upcoming aerospace manufacturing facilities.",
      "trend": [
        {
          "month": "Apr",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "May",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Jun",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Jul",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Aug",
          "availability": 100.0,
          "downtime": 0.0
        },
        {
          "month": "Sep",
          "availability": 100.0,
          "downtime": 0.0
        }
      ],
      "cmCompliancePct": 100.0
    },
    {
      "id": "TASL-HYD",
      "name": "TASL Aerospace Structures - Hyderabad",
      "plantCode": "HYD-AERO-01",
      "machinesCount": 34,
      "availabilityPct": 99.12,
      "unplannedDowntimeHrs": 142.5,
      "mtbfHrs": 710.5,
      "mttrHrs": 3.8,
      "pmCompliancePct": 96.2,
      "cmCompliancePct": 92.5,
      "breakdownOccurrences": 4,
      "spocConfirmation": "Yes",
      "remarks": "Empennage and fuselage assembly precision machining cell.",
      "trend": [
        {
          "month": "Apr",
          "availability": 99.4,
          "downtime": 28.5
        },
        {
          "month": "May",
          "availability": 99.15,
          "downtime": 32.0
        },
        {
          "month": "Jun",
          "availability": 98.8,
          "downtime": 36.5
        },
        {
          "month": "Jul",
          "availability": 99.2,
          "downtime": 30.0
        },
        {
          "month": "Aug",
          "availability": 99.12,
          "downtime": 142.5
        },
        {
          "month": "Sep",
          "availability": 99.35,
          "downtime": 26.0
        }
      ]
    },
    {
      "id": "TASL-PUN",
      "name": "TASL Defense Systems - Pune",
      "plantCode": "PUN-DEF-02",
      "machinesCount": 28,
      "availabilityPct": 98.75,
      "unplannedDowntimeHrs": 210.8,
      "mtbfHrs": 585.0,
      "mttrHrs": 4.15,
      "pmCompliancePct": 93.8,
      "cmCompliancePct": 89.0,
      "breakdownOccurrences": 6,
      "spocConfirmation": "Yes",
      "remarks": "Heavy defense vehicle chassis and turret ring manufacturing.",
      "trend": [
        {
          "month": "Apr",
          "availability": 98.9,
          "downtime": 41.0
        },
        {
          "month": "May",
          "availability": 98.6,
          "downtime": 48.5
        },
        {
          "month": "Jun",
          "availability": 98.4,
          "downtime": 52.0
        },
        {
          "month": "Jul",
          "availability": 98.7,
          "downtime": 44.0
        },
        {
          "month": "Aug",
          "availability": 98.75,
          "downtime": 210.8
        },
        {
          "month": "Sep",
          "availability": 98.95,
          "downtime": 38.0
        }
      ]
    },
    {
      "id": "TASL-NAG",
      "name": "TASL Aerostructures Assembly - Nagpur",
      "plantCode": "NAG-ASY-03",
      "machinesCount": 16,
      "availabilityPct": 99.6,
      "unplannedDowntimeHrs": 45.2,
      "mtbfHrs": 890.0,
      "mttrHrs": 2.9,
      "pmCompliancePct": 98.5,
      "cmCompliancePct": 95.0,
      "breakdownOccurrences": 2,
      "spocConfirmation": "Yes",
      "remarks": "Final assembly robotic riveting and skin panel milling bay.",
      "trend": [
        {
          "month": "Apr",
          "availability": 99.7,
          "downtime": 8.0
        },
        {
          "month": "May",
          "availability": 99.55,
          "downtime": 10.5
        },
        {
          "month": "Jun",
          "availability": 99.4,
          "downtime": 12.0
        },
        {
          "month": "Jul",
          "availability": 99.65,
          "downtime": 9.2
        },
        {
          "month": "Aug",
          "availability": 99.6,
          "downtime": 45.2
        },
        {
          "month": "Sep",
          "availability": 99.8,
          "downtime": 7.5
        }
      ]
    }
  ]
};

window.SPARES_DASHBOARD_DATA = {
  "overall": {
    "totalSpend": 910559.63,
    "totalEaParts": 13,
    "totalFluidsLiters": 1541.0,
    "totalHoseMeters": 1.0,
    "uniqueMaterialsCount": 16,
    "stockHealthScore": 92.4,
    "leadTimeRiskCount": 3,
    "categoryBreakdown": [
      {
        "category": "Main Electro-Spindle",
        "spend": 409830.81,
        "pct": 45.0,
        "color": "#38bdf8"
      },
      {
        "category": "Lubricants & Coolants",
        "spend": 293010.48,
        "pct": 32.2,
        "color": "#10b981"
      },
      {
        "category": "Motion Drives & C-Axis",
        "spend": 131710.19,
        "pct": 14.5,
        "color": "#818cf8"
      },
      {
        "category": "Hydraulics & Filtration",
        "spend": 45717.26,
        "pct": 5.0,
        "color": "#f59e0b"
      },
      {
        "category": "Pneumatics & Chiller",
        "spend": 30290.89,
        "pct": 3.3,
        "color": "#ec4899"
      }
    ],
    "abcDistribution": [
      {
        "class": "Class A (High Capital > 80% Spend)",
        "itemsCount": 4,
        "spend": 626284.15,
        "pct": 68.8,
        "color": "#ef4444"
      },
      {
        "class": "Class B (Medium Value 15% Spend)",
        "itemsCount": 7,
        "spend": 260377.1,
        "pct": 28.6,
        "color": "#f59e0b"
      },
      {
        "class": "Class C (Consumables < 5% Spend)",
        "itemsCount": 5,
        "spend": 23898.38,
        "pct": 2.6,
        "color": "#10b981"
      }
    ]
  },
  "breton1": {
    "machineName": "Breton 1 (Breton1-Flymill-5Axis CNC)",
    "equipmentId": "11000551",
    "plant": "1031 (TSAL Aerospace Composites)",
    "location": "MT01",
    "totalSpend": 910559.63,
    "transactions": [
      {
        "doc": "4907766458",
        "item": "3",
        "materialCode": "111102001103247",
        "materialName": "High-Speed Spindle Bearing Circulation Lubricant (ISO VG 10)",
        "category": "Lubricants & Coolants",
        "subsystem": "Spindle",
        "postingDate": "29.09.2025",
        "qty": 100.0,
        "unit": "L",
        "unitCost": 160.0,
        "totalAmount": 16000.03,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "2 Weeks (Mobil/Fuchs)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 160,
        "reorderPoint": 150
      },
      {
        "doc": "4906305898",
        "item": "3",
        "materialCode": "111102001103247",
        "materialName": "High-Speed Spindle Bearing Circulation Lubricant (ISO VG 10)",
        "category": "Lubricants & Coolants",
        "subsystem": "Spindle",
        "postingDate": "30.04.2025",
        "qty": 238.0,
        "unit": "L",
        "unitCost": 160.0,
        "totalAmount": 38080.08,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "2 Weeks (Mobil/Fuchs)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 160,
        "reorderPoint": 150
      },
      {
        "doc": "4907766458",
        "item": "4",
        "materialCode": "111102001103293",
        "materialName": "Electro-Spindle Cartridge Unit & Drawbar Collet Mechanism",
        "category": "Main Electro-Spindle",
        "subsystem": "Spindle",
        "postingDate": "29.09.2025",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 362405.42,
        "totalAmount": 362405.42,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "A",
        "leadTime": "12 Weeks (OEM Italy)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 1,
        "reorderPoint": 1
      },
      {
        "doc": "4909613814",
        "item": "16",
        "materialCode": "111102001103300",
        "materialName": "Chiller Refrigerant Condenser Fan & Coolant Circulation Pump",
        "category": "Pneumatics & Chiller",
        "subsystem": "Chiller",
        "postingDate": "31.03.2026",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 20019.99,
        "totalAmount": 20019.99,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "3 Weeks (Rittal OEM)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 1,
        "reorderPoint": 1
      },
      {
        "doc": "4909613814",
        "item": "17",
        "materialCode": "111102001103301",
        "materialName": "C1 Rotary Axis Feed Drive Servomotor & Optical Absolute Encoder",
        "category": "Motion Drives & C-Axis",
        "subsystem": "Drives",
        "postingDate": "31.03.2026",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 85977.45,
        "totalAmount": 85977.45,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "A",
        "leadTime": "8 Weeks (Siemens / Breton)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 1,
        "reorderPoint": 1
      },
      {
        "doc": "4904605351",
        "item": "1",
        "materialCode": "111102001103312",
        "materialName": "Spindle Tool Clamping Collet Gripper Segments (Ott-Jakob HSK-A100)",
        "category": "Main Electro-Spindle",
        "subsystem": "Spindle",
        "postingDate": "21.10.2024",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 22945.88,
        "totalAmount": 22945.88,
        "mvt": "261",
        "mvtDescription": "Goods Issue for Maintenance Order",
        "sapOrder": "310000003249",
        "abcClass": "B",
        "leadTime": "3 Weeks (Ott-Jakob)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 3,
        "reorderPoint": 2
      },
      {
        "doc": "4906720569",
        "item": "1",
        "materialCode": "111102001103313",
        "materialName": "Heidenhain Linear Optical Scale Reader Head & Scanning Unit",
        "category": "Motion Drives & C-Axis",
        "subsystem": "Drives",
        "postingDate": "17.06.2025",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 22128.3,
        "totalAmount": 22128.3,
        "mvt": "261",
        "mvtDescription": "Goods Issue for Maintenance Order",
        "sapOrder": "320000009647",
        "abcClass": "B",
        "leadTime": "6 Weeks (Heidenhain)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 1,
        "reorderPoint": 1
      },
      {
        "doc": "4903654350",
        "item": "1",
        "materialCode": "111102001103314",
        "materialName": "X/Y Axis Telescopic Way Cover Wiper & Protective Bellows Assembly",
        "category": "Motion Drives & C-Axis",
        "subsystem": "Drives",
        "postingDate": "14.06.2024",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 23604.44,
        "totalAmount": 23604.44,
        "mvt": "261",
        "mvtDescription": "Goods Issue for Maintenance Order",
        "sapOrder": "320000004894",
        "abcClass": "B",
        "leadTime": "4 Weeks (KabelSchlepp)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 1,
        "reorderPoint": 2
      },
      {
        "doc": "4904530013",
        "item": "4",
        "materialCode": "111102001103378",
        "materialName": "Main Return Line Hydraulic Filter Cartridge Elements (10 Micron Beta 200)",
        "category": "Hydraulics & Filtration",
        "subsystem": "Hydraulics",
        "postingDate": "09.10.2024",
        "qty": 2.0,
        "unit": "EA",
        "unitCost": 3888.54,
        "totalAmount": 7777.08,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "C",
        "leadTime": "2 Weeks (Hydac)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 6,
        "reorderPoint": 4
      },
      {
        "doc": "4905066810",
        "item": "1",
        "materialCode": "111102001107492",
        "materialName": "High-Pressure Proportional Hydraulic Filter & Directional Control Valve",
        "category": "Hydraulics & Filtration",
        "subsystem": "Hydraulics",
        "postingDate": "16.12.2024",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 37597.0,
        "totalAmount": 37597.0,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "4 Weeks (Hydac / Bosch)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 1,
        "reorderPoint": 2
      },
      {
        "doc": "4903636060",
        "item": "1",
        "materialCode": "111102001108514",
        "materialName": "5/2-Way Solenoid Valve & Inductive Tool Proximity Sensor Kit",
        "category": "Pneumatics & Chiller",
        "subsystem": "Pneumatics",
        "postingDate": "12.06.2024",
        "qty": 2.0,
        "unit": "EA",
        "unitCost": 2177.45,
        "totalAmount": 4354.9,
        "mvt": "261",
        "mvtDescription": "Goods Issue for Maintenance Order",
        "sapOrder": "330000019945",
        "abcClass": "C",
        "leadTime": "2 Weeks (Balluff/SMC)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 5,
        "reorderPoint": 4
      },
      {
        "doc": "4905437865",
        "item": "2",
        "materialCode": "111102001108515",
        "materialName": "Spindle Rotary Union Deublin High-Pressure Coolant Seal Overhaul Kit",
        "category": "Main Electro-Spindle",
        "subsystem": "Spindle",
        "postingDate": "28.01.2025",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 24479.51,
        "totalAmount": 24479.51,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "3 Weeks (Deublin OEM)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 2,
        "reorderPoint": 2
      },
      {
        "doc": "4903647362",
        "item": "1",
        "materialCode": "111102001201311",
        "materialName": "High-Pressure Flexible Hydraulic Hose & Energy Chain Cable Guide",
        "category": "Hydraulics & Filtration",
        "subsystem": "Hydraulics",
        "postingDate": "13.06.2024",
        "qty": 1.0,
        "unit": "M",
        "unitCost": 343.18,
        "totalAmount": 343.18,
        "mvt": "261",
        "mvtDescription": "Goods Issue for Maintenance Order",
        "sapOrder": "320000004894",
        "abcClass": "C",
        "leadTime": "1 Week (Parker)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 8,
        "reorderPoint": 5
      },
      {
        "doc": "4906202048",
        "item": "2",
        "materialCode": "111102001300250",
        "materialName": "Semi-Synthetic High-Lubricity Water-Soluble Cutting Coolant",
        "category": "Lubricants & Coolants",
        "subsystem": "Coolant",
        "postingDate": "19.04.2025",
        "qty": 209.0,
        "unit": "L",
        "unitCost": 146.0,
        "totalAmount": 30514.1,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 240,
        "reorderPoint": 200
      },
      {
        "doc": "4903760822",
        "item": "3",
        "materialCode": "111102001300250",
        "materialName": "Semi-Synthetic High-Lubricity Water-Soluble Cutting Coolant",
        "category": "Lubricants & Coolants",
        "subsystem": "Coolant",
        "postingDate": "28.06.2024",
        "qty": 209.0,
        "unit": "L",
        "unitCost": 146.0,
        "totalAmount": 30513.99,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "B",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 240,
        "reorderPoint": 200
      },
      {
        "doc": "4909614944",
        "item": "8",
        "materialCode": "111102001300251",
        "materialName": "Hydraulic Pressure Oil & Spindle Cooling Fluid (ISO VG 46 HLP)",
        "category": "Lubricants & Coolants",
        "subsystem": "Hydraulics",
        "postingDate": "31.03.2026",
        "qty": 122.0,
        "unit": "L",
        "unitCost": 202.0,
        "totalAmount": 24644.01,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "A",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 310,
        "reorderPoint": 250
      },
      {
        "doc": "4906579693",
        "item": "1",
        "materialCode": "111102001300251",
        "materialName": "Hydraulic Pressure Oil & Spindle Cooling Fluid (ISO VG 46 HLP)",
        "category": "Lubricants & Coolants",
        "subsystem": "Hydraulics",
        "postingDate": "02.06.2025",
        "qty": 5.0,
        "unit": "L",
        "unitCost": 202.0,
        "totalAmount": 1010.0,
        "mvt": "261",
        "mvtDescription": "Goods Issue for Maintenance Order",
        "sapOrder": "310000004702",
        "abcClass": "A",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 310,
        "reorderPoint": 250
      },
      {
        "doc": "4906202048",
        "item": "1",
        "materialCode": "111102001300251",
        "materialName": "Hydraulic Pressure Oil & Spindle Cooling Fluid (ISO VG 46 HLP)",
        "category": "Lubricants & Coolants",
        "subsystem": "Hydraulics",
        "postingDate": "19.04.2025",
        "qty": 300.0,
        "unit": "L",
        "unitCost": 202.0,
        "totalAmount": 60600.09,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "A",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 310,
        "reorderPoint": 250
      },
      {
        "doc": "4906565217",
        "item": "2",
        "materialCode": "111102001300256",
        "materialName": "Slideway Lubricating Oil (ISO VG 68 - CGLP Heavy-Duty Guideway)",
        "category": "Lubricants & Coolants",
        "subsystem": "Lubrication",
        "postingDate": "30.05.2025",
        "qty": 148.0,
        "unit": "L",
        "unitCost": 256.0,
        "totalAmount": 37888.05,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "A",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 180,
        "reorderPoint": 200
      },
      {
        "doc": "4903760822",
        "item": "5",
        "materialCode": "111102001300256",
        "materialName": "Slideway Lubricating Oil (ISO VG 68 - CGLP Heavy-Duty Guideway)",
        "category": "Lubricants & Coolants",
        "subsystem": "Lubrication",
        "postingDate": "28.06.2024",
        "qty": 210.0,
        "unit": "L",
        "unitCost": 256.0,
        "totalAmount": 53760.13,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "A",
        "leadTime": "1 Week (Local Supply)",
        "stockStatus": "Reorder Level Alert",
        "currentStock": 180,
        "reorderPoint": 200
      },
      {
        "doc": "4904551925",
        "item": "1",
        "materialCode": "111102001300264",
        "materialName": "Main Pneumatic System Coalescing Filter & Air Pressure Regulator",
        "category": "Pneumatics & Chiller",
        "subsystem": "Pneumatics",
        "postingDate": "14.10.2024",
        "qty": 1.0,
        "unit": "EA",
        "unitCost": 5916.0,
        "totalAmount": 5916.0,
        "mvt": "201",
        "mvtDescription": "Consumption for Cost Center",
        "sapOrder": "Direct Maintenance Allocation",
        "abcClass": "C",
        "leadTime": "2 Weeks (SMC/Festo)",
        "stockStatus": "Adequate Buffer",
        "currentStock": 3,
        "reorderPoint": 2
      }
    ],
    "categoryBreakdown": [
      {
        "category": "Main Electro-Spindle",
        "spend": 409830.81,
        "pct": 45.0,
        "color": "#38bdf8"
      },
      {
        "category": "Lubricants & Coolants",
        "spend": 293010.48,
        "pct": 32.2,
        "color": "#10b981"
      },
      {
        "category": "Motion Drives & C-Axis",
        "spend": 131710.19,
        "pct": 14.5,
        "color": "#818cf8"
      },
      {
        "category": "Hydraulics & Filtration",
        "spend": 45717.26,
        "pct": 5.0,
        "color": "#f59e0b"
      },
      {
        "category": "Pneumatics & Chiller",
        "spend": 30290.89,
        "pct": 3.3,
        "color": "#ec4899"
      }
    ],
    "fluidConsumption": [
      {
        "name": "Hydraulic & Spindle Oil ISO VG 46",
        "code": "111102001300251",
        "qty": 427.0,
        "unit": "L",
        "spend": 86254.1,
        "reorder": 250,
        "current": 310
      },
      {
        "name": "Water-Soluble Cutting Coolant",
        "code": "111102001300250",
        "qty": 418.0,
        "unit": "L",
        "spend": 61028.09,
        "reorder": 200,
        "current": 240
      },
      {
        "name": "Slideway Lubricant ISO VG 68",
        "code": "111102001300256",
        "qty": 358.0,
        "unit": "L",
        "spend": 91648.18,
        "reorder": 200,
        "current": 180
      },
      {
        "name": "High-Speed Spindle Bearing Oil ISO VG 10",
        "code": "111102001103247",
        "qty": 338.0,
        "unit": "L",
        "spend": 54080.11,
        "reorder": 150,
        "current": 160
      }
    ]
  }
};
