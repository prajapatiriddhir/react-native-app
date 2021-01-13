import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Radio from '../assets/radio.png';
import RadioSelected from '../assets/radio_selected.png';
import API from './common/API';
import Loader from './common/Loader';
import Toast from 'react-native-simple-toast';
const {width, height} = Dimensions.get('screen');
const GET_QUESTION_LIST = 'http://api.discoveri.in/api/getQuetions';
const SUBMIT_QUESTION_ANS = 'http://api.discoveri.in/api/submitTestData';

export default class QuizScreen extends Component {
  // Life cycle Method
  constructor(props) {
    super(props);
    this.state = {
      question_list: [],
      selected_ques_id: [],
      selected_ques_ans: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({loading: true});
    // call api to fetch question list
    API.getApiCall(
      GET_QUESTION_LIST,
      this.getQuestionListResponse,
      this.failureResponse,
    );
  }

  render() {
    const {loading, question_list, selected_ques_id} = this.state;

    let getPer = (selected_ques_id.length * 100) / question_list.length;
    let setProgressValue = 0;
    if (question_list.length > 0 && getPer != 0) {
      setProgressValue = (getPer * width) / 100;
    }
    return (
      <View style={styles.containerView}>
        {/* <View style={styles.headerViewStyle} /> */}
        <View style={styles.progressViewStyle}>
          <View
            style={[
              styles.progressPercentViewStyle,
              {width: parseInt(setProgressValue)},
            ]}
          />
        </View>
        <Text
          style={{
            marginBottom: 10,
            marginLeft: setProgressValue - 60 > 10 ? setProgressValue - 60 : 10,
          }}>
          {getPer > 0 ? getPer.toFixed(1) : 0.0}%
        </Text>
        <Loader loading={loading} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={question_list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderQuestionList}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.submitButtonAction()}>
          <Text style={{fontWeight: '700', color: 'white', fontSize: 18}}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  // render question list data
  renderQuestionList = (item1) => {
    const ans_array = item1.item.answerDescription.split(',');
    let isAvalaible = this.state.selected_ques_id.includes(item1.item.id);
    let selectedAns = '';
    if (isAvalaible) {
      selectedAns = this.state.selected_ques_ans[
        this.state.selected_ques_id.indexOf(item1.item.id)
      ];
    }
    return (
      <View>
        <Text
          style={{
            marginHorizontal: 10,
            textAlign: 'center',
            fontSize: 18,
            marginTop: 20,
          }}>
          {item1.item.questionTypeName}
        </Text>
        <FlatList
          bounces={false}
          data={ans_array}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                width: width / 5,
                alignItems: 'center',
                paddingTop: 15,
                paddingBottom: 15,
                borderBottomColor: '#D3D3D3',
                borderBottomWidth: 3,
              }}
              onPress={() => this.selectedOrUnsectedQuestion(item1.item, item)}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor:
                    isAvalaible && selectedAns === item ? '#006FDD' : '#5A6C7E',
                }}
                source={
                  isAvalaible && selectedAns === item
                    ? require('../assets/radio_selected.png')
                    : require('../assets/radio.png')
                }
              />
              <Text style={{textAlign: 'center', marginTop: 5}}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  selectedOrUnsectedQuestion = (item, subItem) => {
    const {selected_ques_ans, selected_ques_id} = this.state;
    let quesIds = selected_ques_id;
    let quesAns = selected_ques_ans;
    if (quesIds.includes(item.id)) {
      const selectedQuestionIndex = quesIds.indexOf(item.id);
      if (quesAns[selectedQuestionIndex] !== subItem) {
        quesAns[selectedQuestionIndex] = subItem;
        this.setState({
          selected_ques_ans: quesAns,
        });
      }
    } else {
      quesIds.push(item.id);
      quesAns.push(subItem);
      this.setState({
        selected_ques_ans: quesAns,
        selected_ques_id: quesIds,
      });
    }
  };

  // submit selected question
  submitButtonAction = async () => {
    const {selected_ques_ans, selected_ques_id} = this.state;
    let body = new FormData();
    body.append('userId', '1');
    selected_ques_id.map((item, index) => {
      body.append('questionId[]', item);
      body.append('questionAnswer[]', selected_ques_ans[index]);
    });
    this.setState({loading: true});
    API.postApiCall(
      SUBMIT_QUESTION_ANS,
      body,
      this.submitQuestionResponse,
      this.failureResponse,
    );
  };

  getQuestionListResponse = (response) => {
    this.setState({loading: false});
    console.log('get question response', response);
    if (response.data.status === '200') {
      this.setState({
        question_list: response.data.data,
      });
    } else {
      setTimeout(() => {
        Toast.show(response.data.error_message);
      }, 10);
    }
  };

  submitQuestionResponse = (response) => {
    this.setState({loading: false});
    console.log('get question response', response);
    if (response.data.status === 200) {
      setTimeout(() => {
        Toast.show(response.data.message);
      }, 10);
    } else {
      setTimeout(() => {
        Toast.show(response.data.message);
      }, 10);
    }
  };
  failureResponse = (error) => {
    console.log('get question submit failure response', error);
    this.setState({loading: false});
    setTimeout(() => {
      Toast.show(error.message);
    }, 50);
  };
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // alignItems: 'center'
  },
  headerViewStyle: {
    width: width,
    height: 64,
    paddingTop: Platform.OS == 'android' ? 0 : 40,
    backgroundColor: '#00000060',
    alignItems: 'center',
  },
  progressViewStyle: {
    width: width,
    height: 15,
    marginBottom: 8,
    backgroundColor: '#CEF7EF',
  },
  progressPercentViewStyle: {
    height: 15,
    backgroundColor: '#00C199',
  },
  submitButton: {
    width: (width * 8) / 10,
    height: 48,
    borderRadius: 10,
    marginLeft: width / 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00C199',
    marginBottom: 30,
    marginTop: 10,
  },
});
