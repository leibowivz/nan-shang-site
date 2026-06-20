# I build systems that last.

Not systems that impress at first glance,
but systems that remain quiet, stable, and correct
after the novelty fades.

I work where data meets uncertainty,
and where the real test is not performance in isolation,
but behavior over time.

**Nan Shang, Ph.D.**  
**Chief Scientist & Founding Engineer, Drone Institute**

---

## Executive Overview

I design, build, and operate production-grade geospatial and AI systems.

My work is focused on systems that must function reliably under real-world constraints: imperfect data, operational pressure, evolving requirements, and long-term use. I am responsible not only for whether a system works in principle, but whether it continues to behave correctly after deployment, iteration, and scale.

I operate primarily at the system level. My role involves defining architecture, evaluation standards, verification strategies, and iteration discipline so that complex spatial intelligence systems can be trusted by operators and decision-makers.

---

## Role and Accountability

**Chief Scientist & Founding Engineer — Drone Institute**

I hold end-to-end accountability for technical direction, system architecture, and long-term system behavior across the company’s geospatial and AI platforms.

As a founding engineer, I designed the core architectures from first principles. This includes defining data flow, interface boundaries, assumptions embedded in processing steps, and the mechanisms by which failures are detected, surfaced, and corrected.

As Chief Scientist, I am responsible for ensuring that research methods are not only technically valid, but operationally deployable, verifiable, and resilient under production constraints.

My accountability spans the full system lifecycle:

* architectural design and evolution
* evaluation criteria and acceptance thresholds
* verification and quality control strategy
* integration of research methods into production
* operational stability under scale and drift

---

## System Design Philosophy

### Production as the Primary Benchmark

A system is considered successful only if it continues to behave correctly after deployment. I evaluate systems based on their long-term operational behavior rather than isolated demonstrations or benchmark metrics.

This requires designing systems that fail visibly rather than silently, and that surface uncertainty, inconsistency, and degradation before they propagate downstream.

### Constraints as Design Inputs

Latency requirements, throughput limits, cost envelopes, operator workload, and data availability are treated as architectural facts rather than optimization targets.

I explicitly design for these constraints so that system behavior remains predictable and maintainable over time.

### Iteration Without Destabilization

Deployment exposes assumptions that are not visible during development. I design feedback loops that allow systems to evolve through controlled iteration without eroding trust or stability.

---

## End-to-End System Architecture

### Data Ingestion and Normalization

I design ingestion pipelines capable of handling heterogeneous spatial data sources with varying quality, resolution, and metadata completeness. Normalization steps explicitly encode assumptions about coordinate systems, units, and spatial reference frames.

### Processing and Analytics

Processing pipelines are structured to isolate transformations, making intermediate outputs inspectable and testable. This enables targeted verification and reduces the risk of compounding errors.

### Inference and Decision Logic

Inference components are integrated as part of a broader decision pipeline, where model outputs are contextualized, validated, and filtered before being exposed to downstream consumers.

### Reporting and Delivery

Final outputs are delivered through controlled interfaces with clear access boundaries, lifecycle management, and auditability.

---

## Verification, Validation, and Quality Control

Spatial intelligence systems are particularly susceptible to silent failure modes, including coordinate reference mismatches, unit inconsistencies, alignment drift, and metadata assumptions.

I design verification frameworks that combine:

* automated checks for spatial consistency
* statistical validation of outputs
* human-in-the-loop review where uncertainty is high

Verification artifacts are treated as first-class outputs, enabling traceability and post-hoc analysis.

---

## Multimodal Remote Sensing Systems

I design and operate workflows that integrate RGB imagery, thermal and infrared data, and derived spatial layers.

These systems are built to manage:

* sensor-specific noise characteristics
* alignment and resolution differences
* uncertainty propagation across modalities

The objective is to extract decision-relevant signals while minimizing false positives in environments with limited or imperfect ground truth.

---

## Research and Production Integration

My academic background is in remote sensing and geospatial analysis, and it directly informs how I design production systems.

My research has addressed recurring questions that surface in operational systems:

* how spatial measurements behave under noise, scale, and resolution changes
* how representation and alignment choices affect downstream inference
* how uncertainty should be quantified and communicated in derived products

These insights inform concrete production decisions, including preprocessing strategies, model selection, validation thresholds, and quality control design.

I have authored and co-authored peer-reviewed publications in journals and conferences. Rather than treating research as a parallel activity, I embed research methods into production pipelines where they improve system robustness and interpretability.

My public citation record is available via Google Scholar:
[https://scholar.google.com/citations?user=TcDAyj0AAAAJ&hl=en](https://scholar.google.com/citations?user=TcDAyj0AAAAJ&hl=en)

---

## Data-Centric AI and Model Lifecycle Management

I design AI systems with a data-centric perspective. Model performance is treated as an outcome of data quality, annotation strategy, and verification discipline.

This includes:

* structured dataset construction and curation
* targeted annotation and re-annotation driven by observed failure modes
* controlled retraining and comparison
* rollback mechanisms when regressions are detected

---

## Selected Work

The work I lead and build is system-oriented rather than project-oriented. Public descriptions focus on architectural patterns and operational behavior.

* Design and operation of large-scale geospatial intelligence platforms with embedded verification and QC
* Development of multisensor analysis pipelines operating under real-world constraints
* Implementation of data-centric AI workflows supporting continuous improvement
* Architecture of secure, multi-tenant delivery systems with audit-friendly access control

---

## Technical Communication and Documentation

I place strong emphasis on technical documentation and knowledge transfer. Systems are documented so that assumptions, constraints, and failure modes are explicit.

This documentation supports:

* operational continuity
* onboarding of new engineers
* reproducibility and auditability

---

## Public Links

* Google Scholar: [https://scholar.google.com/citations?user=TcDAyj0AAAAJ&hl=en](https://scholar.google.com/citations?user=TcDAyj0AAAAJ&hl=en)
* GitHub: [https://github.com/leibowivz](https://github.com/leibowivz)

---

## Contact

* [nan.shang@droneinstitute.ai](mailto:nan.shang@droneinstitute.ai)
* [sn1514826@gmail.com](mailto:sn1514826@gmail.com)

---

*End of document.*
