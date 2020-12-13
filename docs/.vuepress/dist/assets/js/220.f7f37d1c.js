(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1067:function(n,t,a){"use strict";a.r(t);var s=a(42),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"线程池使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程池使用示例"}},[n._v("#")]),n._v(" 线程池使用示例")]),n._v(" "),a("p",[n._v("具体使用示例")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('public class Test {\n     public static void main(String[] args) {   \n         ThreadPoolExecutor executor = new ThreadPoolExecutor(5, 10, 200, TimeUnit.MILLISECONDS,\n                 new ArrayBlockingQueue<Runnable>(5));\n          \n         for(int i=0;i<15;i++){\n             MyTask myTask = new MyTask(i);\n             executor.execute(myTask);\n             System.out.println("线程池中线程数目："+executor.getPoolSize()+"，队列中等待执行的任务数目："+\n             executor.getQueue().size()+"，已执行玩别的任务数目："+executor.getCompletedTaskCount());\n         }\n         executor.shutdown();\n     }\n}\n \n \nclass MyTask implements Runnable {\n    private int taskNum;\n     \n    public MyTask(int num) {\n        this.taskNum = num;\n    }\n     \n    @Override\n    public void run() {\n        System.out.println("正在执行task "+taskNum);\n        try {\n            Thread.currentThread().sleep(4000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println("task "+taskNum+"执行完毕");\n    }\n}\n')])])]),a("p",[n._v("执行结果：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("线程池中线程数目：1，队列中等待执行的任务数目：0，已执行玩别的任务数目：0\n正在执行task 0\n线程池中线程数目：2，队列中等待执行的任务数目：0，已执行玩别的任务数目：0\n线程池中线程数目：3，队列中等待执行的任务数目：0，已执行玩别的任务数目：0\n正在执行task 1\n正在执行task 2\n线程池中线程数目：4，队列中等待执行的任务数目：0，已执行玩别的任务数目：0\n正在执行task 3\n线程池中线程数目：5，队列中等待执行的任务数目：0，已执行玩别的任务数目：0\n线程池中线程数目：5，队列中等待执行的任务数目：1，已执行玩别的任务数目：0\n线程池中线程数目：5，队列中等待执行的任务数目：2，已执行玩别的任务数目：0\n线程池中线程数目：5，队列中等待执行的任务数目：3，已执行玩别的任务数目：0\n线程池中线程数目：5，队列中等待执行的任务数目：4，已执行玩别的任务数目：0\n线程池中线程数目：5，队列中等待执行的任务数目：5，已执行玩别的任务数目：0\n正在执行task 4\n线程池中线程数目：6，队列中等待执行的任务数目：5，已执行玩别的任务数目：0\n线程池中线程数目：7，队列中等待执行的任务数目：5，已执行玩别的任务数目：0\n正在执行task 11\n正在执行task 10\n线程池中线程数目：8，队列中等待执行的任务数目：5，已执行玩别的任务数目：0\n正在执行task 12\n线程池中线程数目：9，队列中等待执行的任务数目：5，已执行玩别的任务数目：0\n正在执行task 13\n线程池中线程数目：10，队列中等待执行的任务数目：5，已执行玩别的任务数目：0\n正在执行task 14\ntask 1执行完毕\ntask 0执行完毕\n正在执行task 5\n正在执行task 6\ntask 12执行完毕\ntask 11执行完毕\n正在执行task 8\ntask 10执行完毕\n正在执行task 9\ntask 3执行完毕\ntask 2执行完毕\ntask 4执行完毕\ntask 13执行完毕\n正在执行task 7\ntask 14执行完毕\ntask 5执行完毕\ntask 6执行完毕\ntask 9执行完毕\ntask 7执行完毕\ntask 8执行完毕\n")])])]),a("p",[n._v("从执行结果可以看出，当线程池中线程的数目大于5时，便将任务放入任务缓存队列里面，当任务缓存队列满了之后，便创建新的线程。如果上面程序中，将for循环中改成执行20个任务，就会抛出任务拒绝异常了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);