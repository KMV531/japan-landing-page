"use client";

import ProfileCard from "@/components/ProfileCard";
import ProfileCard2 from "@/components/ProfileCard2";

const Footer = () => {
  return (
    <footer className="mt-32 mb-20 flex flex-col space-y-8 items-center justify-center">
      <h1 className="font-bold text-2xl md:text-4xl max-w-lg text-center">
        UNLOCKED: THE DEV TEAM <br />- Kaihatsu chimu
      </h1>
      <div className="flex items-center justify-center gap-8">
        <ProfileCard
          name="Vinny Brayan"
          title="DESIGN & CODE SENSEI"
          handle="vinny"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/images/oreki-avatar.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
        />
        <ProfileCard2
          name="Maxime Marme"
          title="CONTENT JOSHU"
          handle="maxime"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/images/avatar.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
        />
      </div>
    </footer>
  );
};

export default Footer;
