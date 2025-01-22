import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
    //  const duplicateLogos = [...companyLogos, ...companyLogos];
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/80">
        Ayuda a impulsar a las empresas para pagos rápidos y seguros
      </h5>
      <div className="carousel">
      <ul className="flex carousel-track">
        {companyLogos.concat(companyLogos).map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={`logo-${index}`} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default CompanyLogos;
