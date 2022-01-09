import React, { useState } from "react";
import RegisterStudent from "./RegisterStudent";
import SearchByRollNo from "./SearchByRollNo";
import SumOfThreeSubjects from "./SumOfThreeSubjects";
import ViewStudentRecord from "./ViewStudentRecord";
import AverageOfCollege from "./AverageOfCollege";
import { Link } from "react-router-dom";
import { Image, Row, Col, Button } from "antd";
import { Modal } from "antd";
const DashBoardPage = () => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [AverageOfCollegeisModalVisible, AverageOfCollegesetIsModalVisible] =
    useState(false);
  const AverageOfCollegeshowModal = () => {
    AverageOfCollegesetIsModalVisible(true);
  };
  const AverageOfCollegehandleOk = () => {
    AverageOfCollegesetIsModalVisible(false);
  };

  const AverageOfCollegehandleCancel = () => {
    AverageOfCollegesetIsModalVisible(false);
  };

  const [SearchByRollNoisModalVisible, SearchByRollNosetIsModalVisible] =
    useState(false);
  const SearchByRollNoshowModal = () => {
    SearchByRollNosetIsModalVisible(true);
  };
  const SearchByRollNohandleOk = () => {
    SearchByRollNosetIsModalVisible(false);
  };

  const SearchByRollNohandleCancel = () => {
    SearchByRollNosetIsModalVisible(false);
  };

  const [ViewStudentRecordisModalVisible, ViewStudentRecordsetIsModalVisible] =
    useState(false);
  const ViewStudentRecordshowModal = () => {
    ViewStudentRecordsetIsModalVisible(true);
  };
  const ViewStudentRecordhandleOk = () => {
    ViewStudentRecordsetIsModalVisible(false);
  };

  const ViewStudentRecordhandleCancel = () => {
    ViewStudentRecordsetIsModalVisible(false);
  };
  return (
    <div className="DashBoardPage">
      <Row>
        {/* <Col className="DashBoardPage__Collage-pics" span={11}>
          <>
            <Image
              preview={{ visible: false }}
              style={{
                width: "100%",
              }}
              src="https://media.istockphoto.com/photos/happy-students-celebrating-successful-graduation-on-campus-building-picture-id921653904?k=20&m=921653904&s=612x612&w=0&h=YjJtTfitLN4pai9NbLMYEO12bdvnuO-fcxy_ugIpSpU="
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image src="https://media.istockphoto.com/photos/happy-students-celebrating-successful-graduation-on-campus-building-picture-id921653904?k=20&m=921653904&s=612x612&w=0&h=YjJtTfitLN4pai9NbLMYEO12bdvnuO-fcxy_ugIpSpU=" />
                <Image src="https://media.istockphoto.com/photos/students-and-tourists-rest-in-lawn-chairs-in-harvard-yard-the-open-picture-id859884294?k=20&m=859884294&s=612x612&w=0&h=T-o47HrtZsorfrSBzIn7a2crTDZMjrolaZUFRHgQPYw=" />

                <Image src="https://media.istockphoto.com/photos/graduation-day-picture-id1301361155?b=1&k=20&m=1301361155&s=170667a&w=0&h=EmU9YawFBh6EBQmVbq9RtDjWYOQnxZh5AKyy4VssnqQ=" />

                <Image src="https://media.istockphoto.com/photos/happy-black-student-raising-arm-to-answer-question-while-attending-picture-id1307457391?b=1&k=20&m=1307457391&s=170667a&w=0&h=IKe362OSxjbBcLln6L-Vmi0QCyc7XL95U2DbeoyvNUE=" />
                <Image src="https://media.istockphoto.com/photos/group-of-unrecognisable-international-students-having-online-meeting-picture-id1300822108?b=1&k=20&m=1300822108&s=170667a&w=0&h=CPtbj-Ax8p0oHcxhk30uhQEXc05Yg1LrfEdpxN1p2rc=" />
              </Image.PreviewGroup>
            </div>
          </>
          <div>
            <h1>Explore The Beauty Unversity </h1>
            <Button onClick={() => setVisible(true)}>view your Photos</Button>
          </div>
        </Col> */}
        <Col className="DashBoardPage__Tab" span={12}>
          <div className="DashBoardPage__Tab__container">
            <div>
              <h1> Register A New Student </h1>
              <Modal
                title="Mansha Unveristy of Hyderabad"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                style={{ top: 10 }}
              >
                <RegisterStudent setIsModalVisible={setIsModalVisible}  />
              </Modal>
              <Button onClick={showModal}> Register</Button>
            </div>

            <div>
              <h1> View All Student Records</h1>
              {/* <Link to="/ViewStudentRecord"> */}
              <Modal
                title="Mansha Unveristy of Hyderabad"
                visible={ViewStudentRecordisModalVisible}
                onOk={ViewStudentRecordhandleOk}
                onCancel={ViewStudentRecordhandleCancel}
                style={{ top: 10 }}
              >
                <ViewStudentRecord />
              </Modal>
              <Button onClick={ViewStudentRecordshowModal}> Records</Button>
              {/* </Link> */}
            </div>
            {/* SearchByRollNo */}
            <div>
              <h1> Search Student By Roll No </h1>
              {/* <Link to="/SearchByRollNo"> */}
              <Modal
                title="Mansha Unveristy of Hyderabad"
                visible={SearchByRollNoisModalVisible}
                onOk={SearchByRollNohandleOk}
                onCancel={SearchByRollNohandleCancel}
                style={{ top: 10 }}
              >
                <SearchByRollNo />
              </Modal>
              <Button onClick={SearchByRollNoshowModal}> Search </Button>
              {/* </Link> */}
            </div>
            {/* AverageOfCollege */}
            <div>
              <h1> See OverAll Average of Our College </h1>
              {/* <Link to="/AverageOfCollege"> */}
              <Modal
                title="Mansha Unveristy of Hyderabad"
                visible={AverageOfCollegeisModalVisible}
                onOk={AverageOfCollegehandleOk}
                onCancel={AverageOfCollegehandleCancel}
                style={{ top: 10 }}
              >
                <AverageOfCollege />
              </Modal>
              <Button onClick={AverageOfCollegeshowModal}> OverAll Average</Button>
              {/* </Link> */}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default DashBoardPage;
