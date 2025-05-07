import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import icon3 from "../../assets/icons/Community.png";
import icon2 from "../../assets/icons/Nutrition.png";
import icon1 from "../../assets/icons/WorkOut.png";
import img1 from "../../assets/images/onboarding/screen2.png";
import img2 from "../../assets/images/onboarding/screen3.png";
import img3 from "../../assets/images/onboarding/screen4.png";
import OnboardingScreen from "../../components/OnbordingScreen/OnbordingScreen";
import onboardingData from "../../utils/data/OnBoardingData.json";

const images = [img1, img2, img3];
const icons = [icon1, icon2, icon3];

export default function OnboardingStep() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [stepData, setStepData] = useState<any>(null);

  useEffect(() => {
    const stepIndex = Number(id) - 1;
    const data = onboardingData[stepIndex];

    if (!data) {
      router.replace("/");
      return;
    }

    if (stepIndex >= 0 && stepIndex < onboardingData.length) {
      const data = onboardingData[stepIndex];
    
      setStepData({
        ...data,
        image: images[stepIndex],
        icon: icons[stepIndex],
        buttonLabel: stepIndex < onboardingData.length - 1 ? "Next" : "Get Started",
        nextRoute: stepIndex < onboardingData.length - 1 ? `/onboarding/${stepIndex + 2}` : "/",
        id: stepIndex + 2,
      });
    }
    
  }, [id]);

  if (!stepData) return null;

  return <OnboardingScreen {...stepData} />;
}
