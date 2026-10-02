import { Fish, Anchor, Waves, ShoppingBag, Ship, Network } from 'lucide-react';
import type { NavItem, FishingMethod, TimelineEvent, FamilyVoice, ScheduleItem } from './types';

export const navItems: NavItem[] = [
  {
    label: 'プロフィール',
    href: '#about',
    children: [
      { label: '川勝一彦さんについて', href: '#about' },
      { label: '漁船「勝栄丸」', href: '#about' },
    ],
  },
  {
    label: '漁業の種類',
    href: '#fishing',
    children: [
      { label: 'なまこ漁', href: '#fishing' },
      { label: 'ウニ・サザエ漁', href: '#fishing' },
      { label: '刺網漁', href: '#fishing' },
      { label: 'かご漁', href: '#fishing' },
    ],
  },
  {
    label: '1日のスケジュール',
    href: '#schedule',
  },
  {
    label: '脱サラの歩み',
    href: '#timeline',
  },
  {
    label: '家族の声',
    href: '#family',
  },
  {
    label: '漁師を目指す方へ',
    href: '#message',
  },
];

export const fishingMethods: FishingMethod[] = [
  {
    name: 'なまこ漁',
    season: '1月〜2月（冬）',
    description: '桁という網漁具を動力漁船で曳いて漁獲します。正月を中心とした冬の漁で、大村湾の主な漁業種類です。',
    icon: Fish,
  },
  {
    name: 'ウニ・サザエ漁',
    season: '3月〜4月',
    description: 'なまこ漁の後に行う磯根資源の漁。ウニやサザエなど、沿岸域の磯根資源を対象とします。',
    icon: Anchor,
  },
  {
    name: '刺網漁',
    season: '3月〜5月',
    description: '刺網でイカやキスなどを獲ります。春まで続く漁業の一つです。',
    icon: Network,
  },
  {
    name: 'かご漁',
    season: '5月〜12月',
    description: '春の連休の後から始まり、なまこ漁が始まるまで続きます。かごでカニ等を獲ります。',
    icon: ShoppingBag,
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    age: '55歳',
    title: '脱サラして漁師研修開始',
    description: '27年間勤めた会社を辞めて漁師になることを決意。決め手は子供が成長したこと、大村市の研修制度があったこと、家業を継ぐということでその後の生活が想定できたこと。',
  },
  {
    age: '56歳',
    title: '独立して准組合員に',
    description: '1年間かけて研修を終了。同時に父から漁船を譲り受け、漁師として独立。大村市漁業協同組合に加入し、准組合員となりました。',
  },
  {
    age: '57歳',
    title: '正組合員へ（予定）',
    description: '1年間の漁師実績を積んだ後は、漁協の正組合員となって、地元の水産業を盛り上げたいと考えています。',
  },
];

export const familyVoices: FamilyVoice[] = [
  {
    title: '妻の声',
    text: '定年まで6年というところで、「サラリーマンから実家を継いで漁師になる」と相談されました。最初は勿論反対しました。収入もかなり減りましたが、家計はどうにかやりくりしています。今は怪我のないようにがんばってほしいと思っています。',
    name: '川勝さんの妻',
  },
];

export const scheduleItems: ScheduleItem[] = [
  {
    time: '夜明け前',
    activity: '沖へ出航。漁場は沿岸から目視できる沿岸域のみ。',
    icon: Ship,
  },
  {
    time: '午前中',
    activity: '漁獲作業。漁業種類により網やかごを使い分ける。',
    icon: Fish,
  },
  {
    time: '正午',
    activity: '帰港。漁獲物の出荷と漁具の手入れ。',
    icon: ShoppingBag,
  },
  {
    time: '午後',
    activity: '自由時間。模型作りなど趣味の時間を過ごす。',
    icon: Waves,
  },
  {
    time: '夕方',
    activity: '夕食までゆっくりした時間を過ごす。',
    icon: Anchor,
  },
];

export const monthlySchedule: { month: string; activity: string; active: boolean }[] = [
  { month: '1月', activity: 'なまこ桁曳き', active: true },
  { month: '2月', activity: 'なまこ桁曳き', active: true },
  { month: '3月', activity: 'ウニ・サザエ / 刺網', active: true },
  { month: '4月', activity: 'ウニ・サザエ / 刺網', active: true },
  { month: '5月', activity: 'かご漁開始', active: true },
  { month: '6月', activity: 'かご漁', active: true },
  { month: '7月', activity: 'かご漁', active: true },
  { month: '8月', activity: 'かご漁', active: true },
  { month: '9月', activity: 'かご漁', active: true },
  { month: '10月', activity: 'かご漁', active: true },
  { month: '11月', activity: 'かご漁', active: true },
  { month: '12月', activity: 'かご漁 / なまこ準備', active: true },
];
