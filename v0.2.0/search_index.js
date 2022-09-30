var documenterSearchIndex = {"docs":
[{"location":"api/#API-Reference","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"api/","page":"API Reference","title":"API Reference","text":"This page provides a list of all documented types and functions and in InteratomicBasisPotentials.jl.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"If you are looking for more specifics on the InteratomicPotentials Interface, see the InteratomicBasisPotentials Interface page.","category":"page"},{"location":"api/","page":"API Reference","title":"API Reference","text":"Modules = [InteratomicBasisPotentials]\nOrder   = [:type, :function, :constant]","category":"page"},{"location":"api/#InteratomicBasisPotentials.BasisParameters","page":"API Reference","title":"InteratomicBasisPotentials.BasisParameters","text":"BasisParameters\n\nAbstract type for the parameters that define the generation of descriptors for a potential.\n\n\n\n\n\n","category":"type"},{"location":"api/#InteratomicBasisPotentials.BasisPotential","page":"API Reference","title":"InteratomicBasisPotentials.BasisPotential","text":"BasisPotential <: AbstractPotential\n\nAbstract type for potentials that are defined by a basis of polynomials.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.length","page":"API Reference","title":"Base.length","text":"length(params::BasisParameters) :: Int\n\nRetrieve the length of the descriptor vector, the number of descriptors used in the basis potential.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicBasisPotentials.evaluate_basis","page":"API Reference","title":"InteratomicBasisPotentials.evaluate_basis","text":"evaluate_full(A::AbstractSystem, params::BasisParameters)::Tuple(Vector{Vector}, Vector{Matrix}, Vector{Matrix})\n\nRetrieve the local descriptors (descriptors, gradients, and virials) for a Basis Potential\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicBasisPotentials.evaluate_basis_d","page":"API Reference","title":"InteratomicBasisPotentials.evaluate_basis_d","text":"evaluate_basis_d(A::AbstractSystem, params::BasisParameters)::Vector{Matrix{Float64}}\n\nRetrieve the gradient of the descriptors (used for force calulations) for a Basis Potential.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicBasisPotentials.evaluate_basis_v","page":"API Reference","title":"InteratomicBasisPotentials.evaluate_basis_v","text":"evaluate_basis_v(A::AbstractSystem, params::BasisParameters)::Matrix{Float64}\n\nRetrieve the descriptor vectors corresponding to the virial stress tensor of a configuration, for a Basis Potential.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.energy_and_force","page":"API Reference","title":"InteratomicPotentials.energy_and_force","text":"energy_and_force(s::AbstractSystem, p::AbstractPotential)::NamedTuple{(:e, :f), Tuple{Unitful.Energy,Vector{SVector{3, Unitful.Force}}}}\n\nCalculate the unit-annotated potential energy of a system and the force acting on each particle in a system using the provided interatomic potential. This combined function is offered because it is usually more efficient to calculate both properties simultaneously.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.force","page":"API Reference","title":"InteratomicPotentials.force","text":"force(s::AbstractSystem, p::AbstractPotential)::Vector{SVector{3, Unitful.Force}}\n\nCalculate the unit-annotated force acting on each particle in a system using the provided interatomic potential. The default implementation uses the :f property of energy_and_force(s,p).\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.get_rcutoff","page":"API Reference","title":"InteratomicPotentials.get_rcutoff","text":"get_rcutoff(p::AbstractPotential)::AbstractFloat\n\nRetrieve the radius cutoff for the provided potential. This is the cutoff used for neighbor list calculations. (i.e. Any pairs beyond this cutoff will be ignored.) Defaults to Inf if a potential type does not implement a custom method.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.get_species","page":"API Reference","title":"InteratomicPotentials.get_species","text":"get_species(p::AbstractPotential)::Union{Tuple,Missing}\n\nRetrieve the species to be included in an interaction (pairs including a species not in the list are ignored). A value of missing indicates that all species should be included, which is the default behavior if a potential type does not implement a custom method.\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.potential_energy","page":"API Reference","title":"InteratomicPotentials.potential_energy","text":"potential_energy(s::AbstractSystem, p::AbstractPotential)::Unitful.Energy\n\nCalculate the unit-annotated potential energy of a system using the provided interatomic potential. The default implementation uses the :e property of energy_and_force(s,p).\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.virial","page":"API Reference","title":"InteratomicPotentials.virial","text":"virial(s::AbstractSystem, p::AbstractPotential)::Unitful.Energy\n\nCalculate the unit-annotated virial of a system, officially calculated as the trace contraction of the sum of radial-force outerproducts: trleft( sum r_ij bigotimes F_ij right)\n\n\n\n\n\n","category":"function"},{"location":"api/#InteratomicPotentials.virial_stress","page":"API Reference","title":"InteratomicPotentials.virial_stress","text":"virial_stress(s::AbstractSystem, p::AbstractPotential)::SVector{6,Unitful.Energy}\n\nCalculate the unit-annotated virial stress tensor of a system, officially calculated as the sum of radial-force outerproducts: sum r_ij bigotimes F_ij, only returns the unique lower-diagonal components.\n\n\n\n\n\n","category":"function"},{"location":"interface/#InteratomicBasisPotentials-Interface","page":"InteratomicBasisPotentials Interface","title":"InteratomicBasisPotentials Interface","text":"","category":"section"},{"location":"interface/#Instantiating-a-Built-In-Interatomic-Potentials","page":"InteratomicBasisPotentials Interface","title":"Instantiating a Built-In Interatomic Potentials","text":"","category":"section"},{"location":"interface/","page":"InteratomicBasisPotentials Interface","title":"InteratomicBasisPotentials Interface","text":"Below is an example for building an Atomic Cluster Expansion (ACE) potential:","category":"page"},{"location":"interface/","page":"InteratomicBasisPotentials Interface","title":"InteratomicBasisPotentials Interface","text":"body_order = 2 \npolynomial_degree = 8\nr_inner_cutoff = 0.5 * u\"Å\"\nr_cutoff = 4.0 * u\"Å\"\nspecies = [:Ar, ]\nwL      = 1.0 \ncsp     = 1.0\nace_params = RPIParams(species, body_order, polynomial_degree, wL, csp, r_inner_cutoff, r_cutoff)","category":"page"},{"location":"bibliography/","page":"References","title":"References","text":"","category":"page"},{"location":"#InteratomicBasisPotentials","page":"Home","title":"InteratomicBasisPotentials","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Package that provides add-ons to the InteratomicPotentials.jl package for interatomic potentials that are defined using basis functions, in particular we support the Spectral Neighbor Analysis Potential (SNAP) (Thompson, 2015) and the Atomic Cluster Expansion (ACE) (Drautz, 2019). Defines an API for abstract interatomic potentials (currently supporting 2-body interactions) and the atomic configuration interface defined by AtomsBase.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Developed as part of the CESMIX Julia package suite. See also ComposableWorkflows, InteratomicPotentials.jl, and PotentialLearning.jl.","category":"page"},{"location":"#Conventions","page":"Home","title":"Conventions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The unit convention throughout the package and other packages in the CESMIX Julia Suite is to assume all unspecified units to be atomic units as defined in the UnitfulAtomic.jl package. All exposed interfaces should allow for numeric or unitful input. For clarity's sake, it is strongly recommended that user code utilize Unitful wherever possible. Internally, InteratomicPotentials.jl will automatically convert these quantities to be compatible without a significant performance penalty.","category":"page"},{"location":"#Next-Steps","page":"Home","title":"Next Steps","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you would like to use the InteratomicPotentials suite in a molecular dynamics simulator, see Atomistic.jl. There, you will learn more about how the abstract classes provided in the present package can be used in conjuction with the Atomistic API and a variety of MD simulators. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you would like to fit your potential parameters to data, see our project at PotentialLearning.jl, a work in progress, that aims to provide support for a variety of learning and inference tasks.","category":"page"},{"location":"#References","page":"Home","title":"References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Thompson, A.P., et al.: Spectral neighbor analysis method for automated generation of quantum-accurate interatomic potentials, Journal of Computational Physics, 285, 2015. Drautz, R.: Atomic cluster expansion for accurate and transferable interatomic potentials. Phys. Rev. B Condens. Matter. 99, 014104 (2019).","category":"page"}]
}
