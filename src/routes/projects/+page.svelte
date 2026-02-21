<script lang="ts">
  import Card from "$lib/components/Card.svelte";

  const projects = [
    {
      icon: "memory",
      title: "ESP32 / ESP8266 Development",
      desc:
        "Firmware builds for Wi-Fi devices, OTA updates, MQTT/HTTP integration, and reliable behavior on constrained hardware.",
      tags: ["ESP32", "ESP8266", "OTA", "MQTT"]
    },
    {
      icon: "developer_board",
      title: "TFT Displays + Sensor Coding",
      desc:
        "UI systems for small displays, sensor pipelines, drivers, and stable refresh loops.",
      tags: ["TFT", "OLED", "I2C/SPI", "Drivers"]
    },
    {
      icon: "science",
      title: "Arduino Testing + Open Source",
      desc:
        "Prototyping, validation, documentation, and publishable examples that promote community adoption.",
      tags: ["Arduino", "Testing", "Docs"]
    },
    {
      icon: "security",
      title: "Security Hardware + Software",
      desc:
        "Practical monitoring, segmentation guidance, hardening, and visibility tooling.",
      tags: ["Security", "Monitoring", "Hardening"]
    },
    {
      icon: "storage",
      title: "Database Integration",
      desc:
        "Schema design, D1/SQL workflows, and API interfaces for device-to-dashboard pipelines.",
      tags: ["D1", "SQL", "APIs"]
    },
    {
      icon: "dashboard",
      title: "SaaS Dashboard Building",
      desc:
        "Reusable UI systems, telemetry panels, scalable layout architecture.",
      tags: ["SaaS", "Dashboards", "UX"]
    },
    {
      icon: "print",
      title: "3D Printing + Prototyping",
      desc:
        "Enclosures, mounts, and functional hardware refinement.",
      tags: ["3D Printing", "Prototyping"]
    },
    {
      icon: "code",
      title: "Full-Stack Web Development",
      desc:
        "SvelteKit front-end, APIs, auth-ready structure, and cloud deployment.",
      tags: ["Full-Stack", "SvelteKit", "Cloud"]
    },
    {
      icon: "apps",
      title: "Application Development",
      desc:
        "Cross-platform internal tools, dashboards, and workflow applications designed for operational clarity.",
      tags: ["Apps", "Workflows", "Systems"]
    }
  ];
</script>

<section class="projects">
  <Card title="Development Projects">
    <p class="lead">
      A structured overview of the hardware, firmware, security, and platform
      work we build and maintain.
    </p>
  </Card>

  <div class="grid">
    {#each projects as p}
      <Card>
        <div class="project-top">
          <span class="material-icons icon">{p.icon}</span>
          <h3>{p.title}</h3>
        </div>

        <p class="desc">{p.desc}</p>

        <div class="tags">
          {#each p.tags as t}
            <span class="tag">{t}</span>
          {/each}
        </div>
      </Card>
    {/each}
  </div>

  <Card title="Collaboration">
    <p>
      Whether you're building a device, modernizing infrastructure,
      or developing a full SaaS layer around real-world telemetry,
      this is the development zone.
    </p>
  </Card>
</section>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .lead {
    margin: 0;
    color: rgba(255,255,255,0.72);
    line-height: 1.55;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.1rem;
  }

  .project-top {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .icon {
    color: rgba(161,58,170,0.95);
    font-size: 22px;
    filter: drop-shadow(0 0 8px rgba(161,58,170,0.25));
  }

  .desc {
    margin: 0.6rem 0 0.9rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.5;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    font-size: 0.8rem;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.10);
    background: rgba(0,0,0,0.20);
    color: rgba(255,255,255,0.72);
  }

  @media (max-width: 980px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>