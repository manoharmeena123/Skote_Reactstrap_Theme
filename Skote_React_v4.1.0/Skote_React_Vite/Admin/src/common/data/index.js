import { cryptoOrders, wallet, productData, cryptoOrderData, icoLandingTeam, blogs, orderbookData } from "./crypto";
import { invoiceList } from "./invoices";
import { projects, projectListData, OverviewTeamMember } from "./projects";
import { tasks, recentTasksData, AddTeamMember } from "./tasks";
import {
  inboxmails,
  starredmails,
  importantmails,
  draftmails,
  sentmails,
  trashmails,
  mailDB,
  labelsData,
  mailChatData
} from "./mails";
import {
  cartData,
  comments,
  customerData,
  discountData,
  orders,
  productsData,
  recentProducts,
  shops,
  productComments
} from "./ecommerce";
import { chats, contacts, groups, messages } from "./chat";
import { calenderDefaultCategories, events } from "./calender";
import { users, userProfile } from "./contacts";
import { yearData, monthData, weekData, activityData, latestTransaction, TopCitiesSelling } from "./dashboard";
import { jobs, jobListCandidate, jobApply } from "./job";

import {
  janTopSellingData,
  decTopSellingData,
  novTopSellingData,
  octTopSellingData,
  janEarningData,
  decEarningData,
  novEarningData,
  octEarningData,
  chatData, tasksData
} from "./dashboard-saas";

import { marchWalletData, febWalletData, janWalletData, decWalletData, transactionsDataALL, transactionsDataBuy, transactionsDataSell, notificationsData } from "./dashboard-crypto";

import { jobVacancyData, statistic_data, recentAddedJobsData, activityFeedData } from "./dashboard-job";

import { visitor, postRecentData, postPopularData, commentsData, progressData, activityBlogData } from "./dashboard-blog";

import { filesData, filemanagerData, storageData } from "./file-manager";

import { categoriesData, archiveData, popularPosts, tagsData } from "./blog";

import { jobsGridData, experienceData, jobType } from "./job-Grid";

export {
  jobsGridData,
  experienceData,
  jobType,
  tagsData,
  categoriesData,
  archiveData,
  popularPosts,
  AddTeamMember,
  recentTasksData,
  mailChatData,
  labelsData,
  orderbookData,
  storageData,
  filemanagerData,
  filesData,
  activityFeedData,
  recentAddedJobsData,
  activityBlogData,
  activityData,
  progressData,
  commentsData,
  postPopularData,
  postRecentData,
  notificationsData,
  transactionsDataSell,
  transactionsDataBuy,
  transactionsDataALL,
  tasksData,
  latestTransaction,
  productsData,
  cryptoOrderData,
  discountData,
  events,
  calenderDefaultCategories,
  chats,
  groups,
  contacts,
  messages,
  orders,
  cartData,
  customerData,
  shops,
  recentProducts,
  comments,
  wallet,
  icoLandingTeam,
  inboxmails,
  importantmails,
  draftmails,
  sentmails,
  trashmails,
  starredmails,
  cryptoOrders,
  productData,
  blogs,
  invoiceList,
  projects,
  projectListData,
  TopCitiesSelling,
  OverviewTeamMember,
  tasks,
  users,
  userProfile,
  yearData,
  monthData,
  weekData,
  janTopSellingData,
  decTopSellingData,
  novTopSellingData,
  octTopSellingData,
  janEarningData,
  decEarningData,
  novEarningData,
  octEarningData,
  chatData,
  productComments,
  jobs,
  jobListCandidate,
  jobApply,
  marchWalletData, febWalletData, janWalletData, decWalletData, jobVacancyData, statistic_data, visitor, mailDB
};
