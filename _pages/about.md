---
layout: about
title: About
permalink: /
subtitle: <a href='https://www.cosmostat.org'>CosmoStat</a>, <a href='https://irfu.cea.fr/dap/'>Département d'Astrophysique</a>, <a href='https://www.cea.fr'>CEA</a>, Saclay, France.

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <i class="fas fa-envelope"></i> <a href="mailto:ezecentofanti@gmail.com">ezecentofanti@gmail.com</a>

# selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

# announcements:
#   enabled: true # includes a list of news items
#   scrollable: true # adds a vertical scroll bar if there are more than 3 news items
#   limit: 5 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts
---

I am a second-year PhD student working on machine learning (ML) and artificial intelligence (AI) methods for optical and radio astronomical imaging.

<h2>Research Interests</h2>

The goal of my PhD is to apply ML and AI techniques to address key challenges in astronomical imaging. In the era of multi-messenger astronomy, my work spans two wavelengths: optical and radio, tackling domain-specific challenges in imaging.

I am a member of the <a href="https://www.euclid-ec.org/consortium/about-ec/"><em>Euclid</em> consortium</a>, where I work on modelling the instrumental response of the <a href="https://www.esa.int/Science_Exploration/Space_Science/Euclid"><em>Euclid</em> telescope</a>, known as the point spread function (PSF). The PSF describes how observed sources are distorted by imperfections in the telescope’s optical system. In the context of weak gravitational lensing (WL) studies—where galaxy shapes are measured and statistically analysed to constrain cosmological parameters—it is essential to characterise the PSF accurately. The novel <em>WaveDiff</em> model (<a href="https://doi.org/10.1088/1361-6420/acb664">Liaudat et al., 2023</a>), a differentiable and data-driven approach, has been developed at CosmoStat in recent years. During my PhD, I contribute to the development and testing of new <em>WaveDiff</em> features, with the goal of applying the model to real <em>Euclid</em> observations. Furthermore, to enhance the capabilities of polychromatic PSF models such as <em>WaveDiff</em>, I proposed in my first year a method for stellar spectral classification from single wide-band images, increasing the number of stars available to train data-driven PSF models (<a href="https://doi.org/10.1051/0004-6361/202452224">Centofanti et al. 2024</a>).

Challenges related to the point spread function (PSF) are not limited to optical imaging but also arise in radio interferometry, where signals from multiple antennas are combined to sample the spatial structure of the sky. In this context, the radio PSF—known as the <span class="notion-enable-hover" data-token-index="1">dirty beam</span>—is precisely determined by the antenna positions and the observing strategy, yet it exhibits a far more complex morphology than its optical counterpart. Imaging and deconvolution of interferometric observations has become a major challenge in astronomy due to the enormous data volumes produced by modern radio interferometers. As part of my PhD, I also collaborate with the <a href="https://argos-telescope.eu">ARGOS project</a>, which aims to build a cutting-edge, affordable, and sustainable radio interferometer in Crete, Greece. To explore different antenna layouts and test reconstruction algorithms, I developed <em><a href="https://github.com/ARGOS-telescope/argosim"><span class="notion-enable-hover" data-token-index="3">argosim</span></a></em> (Centofanti et al., 2025), a Python package for radio interferometric simulations. The <span class="notion-enable-hover" data-token-index="5"><em>argosim</em> package</span> is lightweight, modular, and compatible with all major operating systems. Its computational backend is built on <a href="https://docs.jax.dev/en/latest/index.html">JAX</a>, providing both significant performance acceleration, GPU compatibility and automatic differentiability.

I am currently working on radio weak gravitational lensing, where I am developing a generative forward model for cosmic shear measurements of radio galaxies. This model aims to overcome two major sources of bias in traditional shape measurements: (i) <span class="notion-enable-hover" data-token-index="1">model bias</span> arising from the parametric fitting of complex galaxy morphologies, and (ii) the limitations of using ellipticity as a tracer of shape for arbitrary galaxy profiles. My approach is to model the forward observation process of multiple galaxies within the same region of the sky, which share a common cosmic shear. By applying sampling algorithms such as Hamiltonian Monte Carlo (HMC), it becomes possible to directly infer the shear without relying on shape measurements of individual galaxies.

<h2>Education</h2>
I studied Electrical Engineering at the University of Buenos Aires. In 2020, I received the Eiffel Excellence Scholarship from the French government to complete my engineering degree in France, as part of a double-degree program at IMT Atlantique. In parallel with my engineering studies, I pursued a Master’s degree in Signal and Image Processing (SISEA), co-accredited by the University of Rennes and CentraleSupélec.
