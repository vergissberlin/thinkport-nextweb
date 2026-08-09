---
title: "Observability für Banken: Warum OpenTelemetry DORA-Pflicht wird"
description: "DORA ist seit Januar 2025 verpflichtend. Deutsche Banken brauchen nachweisbare ICT-Resilienz – OpenTelemetry liefert die technische Grundlage dafür."
pubDate: "2026-06-26"
heroImage: "/blog/2026-06-26-opentelemetry-observability-banken-hero.jpg"
author: "andre-lademann"
ogTitle: "Warum OpenTelemetry für Banken zur DORA-Pflicht wird"
ogDescription: "DORA verlangt nachweisbare ICT-Resilienz. OpenTelemetry ist die technische Antwort – wie Banken in Deutschland die Umstellung jetzt angehen."
ogImage: "/blog/2026-06-26-opentelemetry-observability-banken-hero.jpg"
tags: ["OpenTelemetry", "Observability", "DORA", "Banking", "Compliance", "Cloud"]
---

Seit Januar 2025 ist der Digital Operational Resilience Act (DORA) für alle Finanzunternehmen in der EU verbindlich. Was das für deutsche Banken konkret bedeutet, wird vielen erst jetzt klar: Compliance ist keine Dokumentationsübung mehr. Die Aufsichtsbehörden – BaFin und EZB – verlangen Nachweise. Wer ICT-Vorfälle nicht erkennen, klassifizieren und lückenlos dokumentieren kann, steht vor einem ernsthaften regulatorischen Problem.

Genau hier kommt OpenTelemetry ins Spiel.

## Von der Pflicht zur Architektur

DORA schreibt vor, dass Finanzunternehmen bei ICT-Vorfällen nicht nur reagieren, sondern den gesamten Verlauf nachvollziehbar machen können müssen – inklusive Erkennung, Klassifizierung, Eskalation und Wiederherstellung. Das klingt nach einem Prozessthema. In der Praxis ist es ein Datenproblem.

Viele Banken betreiben heute noch eine fragmentierte Monitoring-Landschaft: Logs in einem System, Metriken in einem anderen, Traces nirgendwo. Audit-Trails existieren, sind aber nicht maschinenlesbar korrelierbar. Genau das macht DORA-Compliance unter Prüfungsdruck zum Risiko.

OpenTelemetry schafft hier eine einheitliche Datenbasis. Als herstellerneutraler CNCF-Standard definiert es, wie Traces, Metriken und Logs erfasst, angereichert und weitergeleitet werden – unabhängig vom Backend. 89 Prozent der Unternehmen im Finanzsektor, die Observability bereits aktiv einsetzen, sehen OTel-Compliance bei der Tool-Auswahl als entscheidend an, so der *State of Observability in Financial Services 2026* von Elastic.[^1]

## Der Collector als Compliance-Schicht

Der OpenTelemetry Collector ist die zentrale Komponente in einer DORA-konformen Architektur. Er nimmt Telemetriedaten aus allen Systemkomponenten entgegen, normalisiert sie, reichert sie mit Metadaten an und leitet sie an die konfigurierten Backends weiter. Entscheidend ist, was zwischen Eingang und Ausgang passiert.

Über Processor-Pipelines lassen sich Datenschutzvorgaben technisch durchsetzen: Personenbezogene Daten können vor dem Export maskiert, sensible Felder gefiltert werden. Gleichzeitig lassen sich Audit-Logs über jeden Zugriff auf Telemetriedaten automatisch generieren – wer welche Metriken zu welchem Zeitpunkt abgerufen hat, wird Teil des unveränderlichen Audit-Trails.

Für Banken, die DORA-Anforderungen mit DSGVO-Konformität kombinieren müssen, ist dieser Ansatz nicht optional. Er ist der einzige, der beide Anforderungen technisch sauber trennt.

## Was deutsche Banken heute konkret tun

61 Prozent der Finanzunternehmen nutzen ihre Observability-Plattform bereits für Echtzeit-Compliance-Monitoring und Audit-Trail-Generierung.[^2] Allerdings bewerten über 50 Prozent der Verantwortlichen ihre aktuellen Tools nur als „akzeptabel" für Audit-Readiness – ein Signal, dass die Lücke zwischen Anforderung und Implementierung weiterhin groß ist.

In der Praxis bedeutet eine migrations-fähige OpenTelemetry-Strategie für Banken drei Dinge:

**Collector-First.** Die OTel-Collector-Schicht wird als zentrale Routing-Instanz etabliert, bevor Backends gewechselt oder ergänzt werden. Das entkoppelt die Instrumentierung von der Tool-Abhängigkeit.

**Semantische Konventionen einhalten.** DORA verlangt maschinenlesbare Klassifizierung von Vorfällen. OTel's semantische Konventionen für Fehler-Codes, Service-Levels und Vorfalls-Kategorien liefern die Grundlage für automatisierte Compliance-Berichte.

**EU-Hosting als Hard Requirement.** Observability-Daten aus dem Kernbanksystem verlassen keine EU-Jurisdiktion. Azure Germany West Central, AWS Frankfurt oder eigene Rechenzentren sind keine Präferenzen – sie sind rechtliche Anforderung.

## Das Risiko der Verzögerung

Bis zur DORA-Registrierungsfrist im März 2026 hatten sich erst rund 38 Prozent der potenziell betroffenen Unternehmen registriert.[^3] Das zeigt: Ein erheblicher Teil des deutschen Finanzsektors ist noch nicht vollständig aufgestellt. BaFin-Prüfungen, die auf Basis von DORA-Meldepflichten angestoßen werden, werden zeigen, ob die Compliance-Bereitschaft tatsächlich vorhanden ist oder nur dokumentiert wurde.

OpenTelemetry ist kein Wundermittel. Eine schlecht implementierte OTel-Infrastruktur erzeugt Datenvolumen ohne Erkenntnisgewinn. Aber als Architekturentscheidung mit klarer Governance – versionierte Pipelines, Zugriffskontrolle, regelmäßige Cardinality-Reviews – ist es die technisch sauberste Antwort auf DORA-Anforderungen im Banken-Kontext.

## Ausblick

Die nächste Stufe der Regulierung ist absehbar. NIS2-Enforcement startet im Oktober 2026 – für Banken ergänzend zu DORA. Wer jetzt eine konsolidierte Telemetrie-Plattform aufbaut, die beide Regelwerke abdeckt, investiert nicht in Compliance-Theater. Er schafft die Grundlage für operationale Resilienz, die auch echten Vorfällen standhält.

Thinkport unterstützt Banken und Finanzdienstleister beim Aufbau DORA-konformer Observability-Architekturen auf Basis von OpenTelemetry – von der initialen Architekturberatung bis zum produktiven Rollout.

---

[^1]: Elastic, *State of Observability in Financial Services 2026*, https://www.elastic.co/blog/state-of-observability-2026-financial-services
[^2]: BankInfoSecurity / Elastic, *State of Observability in Financial Services 2026*, https://www.bankinfosecurity.com/whitepapers/state-observability-in-financial-services-2026-w-16291
[^3]: Datenschutzticker, *Compliance 2026: Navigieren durch NIS2, DORA und KI-VO*, https://www.datenschutzticker.de/2026/05/compliance-2026-navigieren-durch-nis2-dora-und-ki-vo/
