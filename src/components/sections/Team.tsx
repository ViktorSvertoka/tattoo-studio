import TeamMemberCard from '../ui/TeamCard';
import { teamMembers } from '../../data/dataTeam';

const Team = () => {
  return (
    <section className="">
      <div className="container">
        <h2 className="text-white font-rye xs:text-[32px] sm:text-[48px] lg:text-[48px] xs:mt-[24px] sm:mt-[40px] lg:mt-[74px] xs:mb-[32px] sm:mb-[40px] lg:mb-[73px] xs:text-center sm:text-center lg:text-center">
          Our artists
        </h2>
        <ul className="flex justify-center xs:flex-col sm:flex-wrap lg:flex-row gap-[24px]">
          {teamMembers.map(({ id, imageSrc, name, role, socialLinks }) => (
            <TeamMemberCard
              key={id}
              image={imageSrc}
              name={name}
              role={role}
              socialLinks={socialLinks}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
