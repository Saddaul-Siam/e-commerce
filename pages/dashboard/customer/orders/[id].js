import { DashboardCustomersOrderDetails } from "../../../../components/mainComponents/Dashboard/Customer";
import {
  BottomBar,
  Footer,
  Navbar,
} from "../../../../components/sharedComponents";
import { DashboardNavigation } from "../../../../components/mainComponents/Dashboard/Commone";
import {
  userAccounts,
  userDashboard,
} from "../../../../data/dashboard.navigation";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F6F9FC] px-3 xl:px-0">
        <div className="container mt-28 pb-5 lg:mt-44">
          <div className="grid grid-cols-4 gap-5 pt-5">
            <div className="col-span-0 hidden lg:col-span-1 lg:block">
              <div className="my-1 rounded-md bg-white py-5 px-3">
                <h2 className="ml-3 pt-2 text-base font-medium text-gray-600">
                  DASHBOARD
                </h2>
                <DashboardNavigation navData={userDashboard} />
                <h2 className="ml-3 pt-5 text-base font-medium text-gray-600">
                  ACCOUNT SETTINGS
                </h2>
                <DashboardNavigation navData={userAccounts} />
              </div>
            </div>
            <div className="col-span-4 lg:col-span-3">
              <DashboardCustomersOrderDetails />
            </div>
          </div>
        </div>
      </div>
      <BottomBar />
      <Footer />
    </>
  );
};

export default Index;
